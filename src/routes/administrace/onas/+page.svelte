<script lang="ts">
    import { getDatabase, ref, update, get } from 'firebase/database';
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';
  
    let OnasText = '';
    let boxText = '';
    let isLoaded = false;
  
    onMount(async () => {
      // Získání textu o-nas
      const dbRef = ref(getDatabase(), 'Texty/O-Nas');
  
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        OnasText = snapshot.val();
        isLoaded = true;
      }
    });
  
    async function addEdit() {
      // Potvrzení aktualizace dat pomocí SweetAlert2
      const result = await Swal.fire({
        title: 'Opravdu chcete aktualizovat text Aktualit?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ano, aktualizovat',
        cancelButtonText: 'Zrušit'
      });
  
      if (result.isConfirmed) {
        // Aktualizace textu v databázi
        const dbRef = ref(getDatabase(), 'Texty/O-Nas');
        await update(dbRef, { text: boxText.toString() });
  
        // Zobrazení notifikace po úspěšném uložení dat
        Swal.fire('Úspěšně uloženo! Aktualizujte tuto stránku', '', 'success');
      }
    }
  </script>
  
  <div class="max-w-md mx-auto">
    <label for="text" class="text-lg text-center block font-medium text-gray-700">Dosavadní Text</label>
    {#if isLoaded}
      <p class="text-blue-500 text-base text-center">{OnasText.text}</p>
    {/if}
  
    <label for="box" class="block font-medium text-gray-700">Nový text:</label>
    <textarea
      id="box"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
      rows="4"
      bind:value={boxText}
    ></textarea>
  
    <button
      type="button"
      class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm"
      on:click={addEdit}
    >
      Přidat úpravu
    </button>
  </div>