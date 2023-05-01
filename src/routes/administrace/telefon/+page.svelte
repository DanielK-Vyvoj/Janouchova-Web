<script lang="ts">
    import { getDatabase, ref, update, get } from 'firebase/database';
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
  
    let telefon = '';
    let boxText = '';
    let isLoaded = false;
  
    onMount(async () => {
      // Získání telefonu
      const dbRef = ref(getDatabase(), 'Texty/Kontakt/Telefon');
  
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        telefon = snapshot.val();
        isLoaded = true;
      }
    });
  
    async function addEdit() {
      // Aktualizace telefonu v databázi
      const dbRef = ref(getDatabase(), 'Texty/Kontakt/Telefon');
      await update(dbRef, boxText.toString());
  
      // Zobrazení notifikace po úspěšném uložení dat
      Swal.fire('Úspěšně uloženo!', '', 'success');
    }
  </script>
  
  <div class="max-w-md mx-auto">
    <label for="text" class="text-lg text-center block font-medium text-gray-700">Dosavadní telefon</label>
    {#if isLoaded}
      <p class="text-blue-500 text-base text-center">{telefon}</p>
    {/if}
  
    <label for="box" class="block font-medium text-gray-700">Nový telefon:</label>
    <input
      type="text"
      id="box"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
      bind:value={boxText}
    />
  
    <button
      type="button"
      class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
      on:click={addEdit}
    >
      Přidat úpravu
    </button>
  </div>
  