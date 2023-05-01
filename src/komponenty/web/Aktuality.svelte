<script lang="ts"> 

import { db } from '../../firebase/Firebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { onMount } from 'svelte';

let AktualityText = '';

onMount(() => {
  // získání textu o-nas
  const dbRef = ref(getDatabase(db), 'Texty/Aktuality');

  onValue(dbRef, (snapshot) => {
    AktualityText = snapshot.val();
  });
});
</script>


<div class="flex items-center justify-center py-16">
    <div class="relative flex bg-white rounded-lg shadow-lg overflow-hidden w-24/36 lg:w-1/2">
      <div class="absolute w-full h-full top-0 left-0 border-4 border-transparent rounded-lg animate-border-pulse"></div>
      <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/1.png?alt=media&token=7fd524d4-7725-4def-9cda-9c348e7669be" alt="obrazek" class="h-46 w-1/3 object-cover">
      <div class="w-2/3 px-8 py-2">
        <h2 class="text-4xl font-bold mb-2 text-center text-black">Aktuality</h2>
        <p class="text-gray-900 text-base text-center ">{AktualityText}</p>
      </div>
    </div>
  </div>