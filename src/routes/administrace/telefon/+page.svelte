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
  const dbRef = ref(getDatabase(), 'Texty/Kontakt/Telefon');

  const result = await Swal.fire({
    title: 'Opravdu chcete aktualizovat telefonní číslo?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ano, aktualizovat',
    cancelButtonText: 'Zrušit'
  });

  if (result.isConfirmed) {
    await update(dbRef, boxText.toString());
    Swal.fire('Úspěšně uloženo! Aktualizujte tuto stránku', '', 'success');
  }
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
  