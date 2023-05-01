<script lang="ts">
    
import { getDatabase, ref, onValue } from 'firebase/database';
  import { onMount } from 'svelte';

  let AktualityText = '';

  onMount(() => {
    // získání textu o-nas
    const dbRef = ref(getDatabase(), 'Texty/Aktuality');

    onValue(dbRef, (snapshot) => {
      AktualityText = snapshot.val();
    });
  });

    let date = '';
    let selectedDate = '';
    let boxText = '';
    
    function addEdit() {
      // implementace přidání úpravy
    }
  </script>
  
  <div class="max-w-md mx-auto">
    <h1 class="text-xl font-medium mb-4 text-center">Upravit sekci Aktuality</h1>
    
    <label for="text" class="block font-medium text-gray-700">Dosavadní Text</label>
    <textarea id="text" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4" rows="4" bind:value={AktualityText}></textarea>
    
 
    <label for="box" class="block font-medium text-gray-700">Nový text:</label>
    <textarea id="box" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4" rows="4" bind:value={boxText}></textarea>
   
    <label for="date" class="block font-medium text-gray-700">Datum úpravy:</label>
    <div class="flex mb-4">
      <input id="date" type="text" class="flex-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mr-2" bind:value={date} placeholder="Vyberte datum">
      <button type="button" class="bg-gray-200 text-gray-700 px-3 py-2 rounded-md shadow-sm" on:click={() => selectedDate = new Date().toLocaleDateString()}>{selectedDate || 'Ihned'}</button>
    </div>
    <button type="button" class="bg-blue-500 text-white px-3 py-2 rounded-md shadow-sm" on:click={addEdit}>Přidat úpravu</button>
  </div>
  
  