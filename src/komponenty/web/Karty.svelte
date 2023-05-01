<script lang="ts">
 
 import { db } from '../../firebase/Firebase';
  import { ref, onValue } from 'firebase/database';
  import { onMount } from 'svelte';

  let onasText = '';
  let email = '';
  let telefon = '';
  let ico = '';

  onMount(() => {
    // získání textu o-nas, emailu, telefonu a ico z databáze
    const onasRef = ref(db, 'Texty/O-Nas/text');
    const emailRef = ref(db, 'Texty/Kontakt/Email/text');
    const telefonRef = ref(db, 'Texty/Kontakt/Telefon');
    const icoRef = ref(db, 'Texty/Kontakt/ICO');
  
    onValue(onasRef, (snapshot) => {
      onasText = snapshot.val();
    });

    onValue(emailRef, (snapshot) => {
      email = snapshot.val();
    });

    onValue(telefonRef, (snapshot) => {
      telefon = snapshot.val();
    });

    onValue(icoRef, (snapshot) => {
      ico = snapshot.val();
    });
  });
</script>
<div class="flex justify-center items-center h-screen">
    <div class="grid grid-cols-3 gap-12">
      <div class="w-96 h-96  bg-pink-200 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div class="w-24 h-24 bg-transparent rounded-full flex items-center justify-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/asdasds.png?alt=media&token=fe20a4ea-83ca-47c3-b71a-8f5de6c6d781" alt="ikonka 1" class="w-24 h-24 mt-24 rounded-full object-cover object-center">
        </div>
        <h3 class=" mt-16 text-lg font-medium flex-grow text-center">Ordinační doba</h3>
        <p class="mt-14 text-gray-500 flex-grow text-center" style="line-height: 1.5rem;">PO: 7:00 - 12:00 / 13:00 - 14:30 <br>ÚT: 7:00 - 12:00 / 12:30 - 13:30 <br>ST: 7:00 - 12:00 / 12:30 - 13:30 <br>ČT: 7:00 - 12:00 / 12:30 - 13:30 <br>PÁ: 7:00 - 12:00</p>
      </div>
      <div class="w-96 h-96 bg-green-200 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div class="w-24 h-24 bg-transparent rounded-full flex items-center justify-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/dsad.png?alt=media&token=5e960488-2e2c-4f0b-a5bf-807bdddcdc54" alt="ikonka 2" class="w-24 h-24 mt-24 rounded-full object-cover object-center">
        </div>
        <h3 class="mt-16 text-lg font-medium flex-grow text-center">Kontakt</h3>
        <p class="mt-1 text-gray-500 flex-grow text-center" style="line-height: 1.5rem;">{telefon} <br>{email}<br>{ico}</p>
      </div>
      <div class="w-96 h-96 bg-blue-200 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div class="w-24 h-24 bg-transparent rounded-full flex items-center justify-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/asda.png?alt=media&token=335136dc-6e8e-4a56-a81c-1e2ba06f13bd" alt="ikonka 3" class="w-24 h-24 mt-24 rounded-full object-cover">
        </div>
        <h3 class="mt-16 text-lg font-medium flex-grow text-center">Adresa</h3>
        <p class="mb-10 text-gray-500 flex-grow text-center">Budějovická 45, 382 03 Křemže</p>
        </div>    
          </div>
        </div>
  
  
  