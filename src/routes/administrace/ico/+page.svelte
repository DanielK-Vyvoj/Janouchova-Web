<script lang="ts">
    import { getDatabase, ref, update, get } from 'firebase/database';
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
  
    let ico = '';
    let boxText = '';
    let isLoaded = false;
  
    onMount(async () => {
      // Získání ICO
      const dbRef = ref(getDatabase(), 'Texty/Kontakt/ICO');
  
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        ico = snapshot.val();
        isLoaded = true;
      }
    });
  
    async function addEdit() {
      // Aktualizace ICO v databázi
      const dbRef = ref(getDatabase(), 'Texty/Kontakt/ICO');
      await update(dbRef, boxText.toString());
  
      // Zobrazení notifikace po úspěšném uložení dat
      Swal.fire('Úspěšně uloženo!', '', 'success');
    }
  </script>
  
  <div class="max-w-md mx-auto">
    <label for="text" class="text-lg text-center block font-medium text-gray-700">Dosavadní ICO</label>
    {#if isLoaded}
      <p class="text-blue-500 text-base text-center">{ico}</p>
    {/if}
  
    <label for="box" class="block font-medium text-gray-700">
  