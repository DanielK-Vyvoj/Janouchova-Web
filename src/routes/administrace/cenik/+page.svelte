<script lang="ts">
    import { getDatabase, ref, onValue, set } from 'firebase/database';
    import { onMount, onDestroy } from 'svelte';
    import Swal from 'sweetalert2';
  
    let productName = '';
    let price = '';
    let isLoaded = false;
    let products = [];
  
    onMount(() => {
      // Získání seznamu produktů z databáze
      const dbRef = ref(getDatabase(), 'Cenik');
  
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
  
        if (data) {
          products = Object.entries(data).map(([name, price]) => ({ name, price }));
          isLoaded = true;
        }
      });
    });
  
    onDestroy(() => {
      // Odhlášení ze sledování změn v databázi při zničení komponenty
      const dbRef = ref(getDatabase(), 'Cenik');
      dbRef.off();
    });
  
    async function addProduct() {
      // Potvrzení přidání produktu pomocí SweetAlert2
      const result = await Swal.fire({
        title: 'Opravdu chcete přidat tento produkt do ceníku?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ano, přidat',
        cancelButtonText: 'Zrušit'
      });
  
      if (result.isConfirmed) {
        // Uložení nového produktu do databáze
        const dbRef = ref(getDatabase(), `Cenik/${productName}`);
        await set(dbRef, price);
  
        // Zobrazení notifikace po úspěšném uložení dat
        Swal.fire('Úspěšně přidáno do ceníku!', '', 'success');
  
        // Vyčištění formuláře po uložení dat
        productName = '';
        price = '';
      }
    }
  </script>
  
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-medium text-gray-800 mb-4">Cenik produktů</h2>
  
    <div class="bg-white rounded-lg shadow-lg mb-8">
      <div class="p-4">
        <label for="product" class="block font-medium text-gray-700">Název produktu:</label>
        <input
          id="product"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
          type="text"
          bind:value={productName}
        />
  
        <label for="price" class="block font-medium text-gray-700">Cena v Kč:</label>
        <input
          id="price"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
          type="number"
          bind:value={price}
        />
  
        <button
          type="button"
          class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
          on:click={addProduct}
        >
          Přidat produkt
        </button>
      </div>
    </div>
  
    {#if isLoaded}
      <table class="w-full table-fixed">
        <thead>
          <tr>
            <th class="w-2/3 px-4 py-2 text-left font-medium text-gray-700">Název produktu</th>
            <th class="w-1/3 px-4 py-2 text-left font-medium text-gray-700">Cena v Kč</th>
          </tr>
        </thead>
        <tbody>
          {#each products as { name, price }}
            <tr class="border-t border-gray-200">
              <td class="w-2/3 px-4 py-2 text-gray-800 font-medium">{name}</td>
              <td class="w-1/3 px-4 py-2 text-gray-800">{price}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else}
      <p>Načítám data...</p>
    {/if}
  </div>
  