<script lang="ts">
  import { getDatabase, ref, update, get } from 'firebase/database';
  import { onMount } from 'svelte';
  import Swal from 'sweetalert2';

  let ordinacniDoba = {};
  let isLoaded = false;
  let selectedDay = '';
  let newHours = '';

  async function fetchData() {
    const dbRef = ref(getDatabase(), 'Texty/OrdinacniDoba');

    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      ordinacniDoba = snapshot.val();
      isLoaded = true;
    }
  }

  onMount(fetchData);

  async function updateOrdinaceDoby() {
    const result = await Swal.fire({
      title: 'Opravdu chcete aktualizovat Ordinační dobu?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ano, aktualizovat',
      cancelButtonText: 'Zrušit',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const dbRef = ref(getDatabase(), `Texty/OrdinacniDoba/${selectedDay}`);
      const updateData = { text: newHours };
      await update(dbRef, updateData);

      Swal.fire('Úspěšně uloženo!', '', 'success');
      fetchData();
    }
  }
</script>

<div class="max-w-md mx-auto">
  {#if isLoaded}
    <div>
      <label for="selectDay" class="block font-medium text-gray-700">Vyber den:</label>
      <select id="selectDay" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4" bind:value={selectedDay}>
        {#each Object.keys(ordinacniDoba) as den}
          <option value={den}>{den}</option>
        {/each}
      </select>

      <label for="newHours" class="block font-medium text-gray-700">Nové hodiny:</label>
      <input
        type="text"
        id="newHours"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
        bind:value={newHours}
      />

      <button
        type="button"
        class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
        on:click={updateOrdinaceDoby}
      >
        Aktualizovat Ordinační dobu
      </button>
    </div>
  {/if}

  <div>
    <h3 class="mt-16 text-lg font-medium flex-grow text-center">Ordinační doba</h3>
    <div class="grid grid-cols-2 gap-4">
      {#each Object.keys(ordinacniDoba) as den}
        <div class="p-4 bg-gray-100 rounded-lg shadow-md">
          <h4 class="text-lg font-medium">{den}</h4>
          <p class="mt-4 text-gray-500">{ordinacniDoba[den].text}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
