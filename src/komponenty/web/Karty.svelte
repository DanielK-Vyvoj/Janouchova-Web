<script lang="ts">
  import { db } from '../../firebase/Firebase';
  import { ref, onValue } from 'firebase/database';
  import { onMount } from 'svelte';

  let onasText = '';
  let email = '';
  let telefon = '';
  let ico = '';
  let adresa = '';
  let ordinacni = '';

  onMount(() => {
    // získání textu o-nas, emailu, telefonu a ico z databáze
    const onasRef = ref(db, 'Texty/O-Nas/text');
    const emailRef = ref(db, 'Texty/Kontakt/Email/text');
    const telefonRef = ref(db, 'Texty/Kontakt/Telefon');
    const icoRef = ref(db, 'Texty/Kontakt/ICO');
    const adresaRef = ref(db, 'Texty/Kontakt/Adresa');
    const ordinacniRef = ref (db, 'Texty/OrdinacniDoba');

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

    onValue(adresaRef, (snapshot) => {
      adresa = snapshot.val();
    });

    onValue(ordinacniRef, (snapshot) => {
      ordinacni = snapshot.val();
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
        <p class="mt-14 text-gray-500 flex-grow text-center" style="line-height: 1.5rem;">
          {#if ordinacni.PO && ordinacni.ST}
            PO: {ordinacni.PO.text} <br> ÚT: {ordinacni.UT.text} <br> ST: {ordinacni.ST.text} <br> ČT: {ordinacni.CT.text} <br> PÁ: {ordinacni.PA.text}
          {:else}
            Informace o ordinační době nejsou k dispozici.
          {/if}
        </p>
      </div>
      <div class="w-96 h-96 bg-green-200 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div class="w-24 h-24 bg-transparent rounded-full flex items-center justify-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/dsad.png?alt=media&token=5e960488-2e2c-4f0b-a5bf-807bdddcdc54" alt="ikonka 2" class="w-24 h-24 mt-24 rounded-full object-cover object-center">
        </div>
        <h3 class="mt-16 text-lg font-medium flex-grow text-center">Kontakt</h3>
        <p class="mt-1 text-gray-500 flex-grow text-center" style="line-height: 1.5rem;">Telefon: {telefon} <br>Email: {email}<br>IČO: {ico}</p>
      </div>
      <div class="w-96 h-96 bg-blue-200 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div class="w-24 h-24 bg-transparent rounded-full flex items-center justify-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/asda.png?alt=media&token=335136dc-6e8e-4a56-a81c-1e2ba06f13bd" alt="ikonka 3" class="w-24 h-24 mt-24 rounded-full object-cover">
        </div>
        <h3 class="mt-16 text-lg font-medium flex-grow text-center">Adresa</h3>
        <p class="mb-10 text-gray-500 flex-grow text-center">{adresa.text}</p>
        </div>    
          </div>
        </div>
  
  
  