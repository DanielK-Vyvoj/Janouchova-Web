<script lang="ts">
  import { getDatabase, ref, update, get } from 'firebase/database';
  import { onMount } from 'svelte';
  import Swal from 'sweetalert2';

  let adresa = '';
  let newAdresa = '';
  let isLoaded = false;

  onMount(async () => {
    // Získání adresy
    const dbRef = ref(getDatabase(), 'Texty/Kontakt/Adresa');

    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      adresa = snapshot.val().text;
      isLoaded = true;
    }
  });

  async function updateAdresa() {
    // Aktualizace adresy v databázi
    const dbRef = ref(getDatabase(), 'Texty/Kontakt/Adresa');
    const updateData = { text: newAdresa };
    await update(dbRef, updateData);

    // Zobrazení notifikace po úspěšném uložení dat
    Swal.fire('Úspěšně uloženo!', '', 'success');
  }
</script>

<div class="max-w-md mx-auto">
  <label for="text" class="text-lg text-center block font-medium text-gray-700">Dosavadní adresa</label>
  {#if isLoaded}
    <p class="text-blue-500 text-base text-center">{adresa}</p>
  {/if}

  <label for="newAdresa" class="block font-medium text-gray-700">Nová adresa:</label>
  <input
    type="text"
    id="newAdresa"
    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
    bind:value={newAdresa}
  />

  <button
    type="button"
    class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
    on:click={updateAdresa}
  >
    Aktualizovat adresu
  </button>
</div>
