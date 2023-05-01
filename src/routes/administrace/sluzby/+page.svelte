<script>
    import { getDatabase, ref, onValue, push, update, remove } from 'firebase/database';
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
  
    let serviceName = '';
    let services = [];
    let isLoaded = false;
    let editService = null;
  
    onMount(() => {
      const dbRef = ref(getDatabase(), 'Sluzby');
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          services = Object.keys(data).map((key) => {
            return {
              id: key,
              name: data[key].name,
            };
          });
        }
        isLoaded = true;
      });
    });
  
    async function addService() {
      if (!serviceName) {
        Swal.fire('Chyba!', 'Název služby je povinný údaj.', 'error');
        return;
      }
  
      const dbRef = ref(getDatabase(), 'Sluzby');
      const newServiceRef = push(dbRef);
      await update(newServiceRef, { name: serviceName });
  
      Swal.fire('Úspěch!', 'Služba byla úspěšně přidána.', 'success');
      serviceName = '';
    }
  
    async function saveService() {
      if (!serviceName) {
        Swal.fire('Chyba!', 'Název služby je povinný údaj.', 'error');
        return;
      }
  
      const dbRef = ref(getDatabase(), `Sluzby/${editService.id}`);
      await update(dbRef, { name: serviceName });
  
      Swal.fire('Úspěch!', 'Služba byla úspěšně upravena.', 'success');
      serviceName = '';
      editService = null;
    }
  
    async function deleteService(service) {
      const result = await Swal.fire({
        title: 'Opravdu chcete smazat tuto službu?',
        text: `${service.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ano, smazat',
        cancelButtonText: 'Zrušit'
      });
  
      if (result.isConfirmed) {
        const dbRef = ref(getDatabase(), `Sluzby/${service.id}`);
        await remove(dbRef);
  
        Swal.fire('Úspěch!', 'Služba byla úspěšně smazána.', 'success');
      }
    }
  </script>

    
<div class="max-w-md mx-auto">
    <h2 class="text-2xl font-medium text-gray-800 mb-4 text-center">Služby</h2>
  
    <div class="bg-white rounded-lg shadow-lg mb-8">
      <div class="p-4">
        {#if editService}
          <h3 class="text-lg font-medium text-gray-800 mb-4">Upravit službu</h3>
  
          <label for="service" class="block font-medium text-gray-700">Název služby:</label>
          <input
            id="service"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
            type="text"
            bind:value={serviceName}
          />
  
          <div class="flex justify-end">
            <button
              type="button"
              class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm mr-2"
              on:click={saveService}
            >
              Uložit změny
            </button>
            <button
              type="button"
              class="bg-gray-400 text-white px-3 py-2 rounded-md shadow-sm"
              on:click={() => {editService = null}}
            >
              Zrušit
            </button>
          </div>
        {:else}
          <h3 class="text-lg font-medium text-gray-800 mb-4">Přidat Službu</h3>
  
          <label for="product" class="block font-medium text-gray-700">Název Služby:</label>
          <input
            id="product"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
            type="text"
            bind:value={serviceName}
          />
          <button
            type="button"
            class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
            on:click={addService}
          >
          Přidat Službu
        </button>
      {/if}
    </div>
      </div>
    {#if isLoaded}
    <table class="w-full table-fixed">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2 text-left font-medium text-gray-700">Název služby</th>
          <th class="w-1/4 px-4 py-2 text-center font-medium text-gray-700">Akce</th>
        </tr>
      </thead>
      <tbody>
        {#each services as service (service.id)}
        <tr>
            <td class="px-4 py-2 text-gray-800">{service.name}</td>
            <td class="px-4 py-2 text-center flex items-center">
                <button
                  type="button"
                  class="bg-gray-400 text-white px-3 py-2 rounded-md shadow-sm mr-2"
                  on:click={() => {
                    editService = service;
                    serviceName = service.name;
                  }}
                >
                  Upravit
                </button>
                <button
                  type="button"
                  class="bg-red-500 text-white px-3 py-2 rounded-md shadow-sm"
                  on:click={() => {deleteService(service)}}
                >
                  Smazat
                </button>
              </td>
          </tr>
          
        {/each}
      </tbody>
    </table>
{:else}
<p>Nacitani...</p>
{/if}
</div>