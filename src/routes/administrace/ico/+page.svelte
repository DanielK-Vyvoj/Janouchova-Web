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
      // Potvrzení aktualizace dat pomocí SweetAlert2
      const result = await Swal.fire({
        title: 'Opravdu chcete aktualizovat IČO?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ano, aktualizovat',
        cancelButtonText: 'Zrušit'
      });
      
      if (result.isConfirmed) {
        // Aktualizace ICO v databázi
        const dbRef = ref(getDatabase(), 'Texty/Kontakt/ICO');
        await update(dbRef, boxText.toString());
  
        // Zobrazení notifikace po úspěšném uložení dat
        Swal.fire('Úspěšně uloženo! Aktualizujte tuto stránku', '', 'success');
      }
    }
  </script>
  
  <div class="max-w-md mx-auto">
    <label for="text" class="text-lg text-center block font-medium text-gray-700">Dosavadní ICO</label>
    {#if isLoaded}
      <p class="text-blue-500 text-base text-center">{ico}</p>
    {/if}
  
    <label for="box" class="block font-medium text-gray-700">
      Nové ICO:
    </label>
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
