<script lang="ts">
  import { db } from '../../firebase/Firebase';
  import { ref, onValue } from 'firebase/database';
  import { onMount } from 'svelte';

  let OnasText = '';

  onMount(() => {
    // získání textu o-nas
    const dbRef = ref(db, 'Texty/O-Nas');
  
    onValue(dbRef, (snapshot) => {
      OnasText = snapshot.val().text;
    });
  });
</script>
<div class="flex items-center justify-center py-12 lg:py-36">
  <div class="relative flex bg-white rounded-lg shadow-lg overflow-hidden w-24/36 lg:w-1/2">
    <div class="absolute w-full h-full top-0 left-0 border-4 border-transparent rounded-lg animate-border-pulse"></div>
    <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/2.png?alt=media&token=4b592f51-b7f6-4f21-9d36-cd65b3edf7e3" alt="obrazek" class="h-46 w-1/3 object-cover hidden lg:block">
    <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/2.png?alt=media&token=4b592f51-b7f6-4f21-9d36-cd65b3edf7e3" alt="obrazek" class="h-20 w-20 object-cover lg:hidden">
    <div class="w-2/3 px-8 py-2">
      <h2 class="text-4xl font-bold mb-2 text-center text-black">O nás</h2>
      <p class="text-gray-900 text-base text-center py-12">{OnasText}</p>
    </div>
  </div>
</div>
