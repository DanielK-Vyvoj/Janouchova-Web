<script lang="ts">

import Aktuality from "../komponenty/web/Aktuality.svelte";
import Karty from "../komponenty/web/Karty.svelte";
import ONas from "../komponenty/web/O-nas.svelte";
import Header from "../komponenty/web/Header.svelte";
import Deti from "../komponenty/web/Deti.svelte";

</script>
<body  class="bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/POZADI-1.gif?alt=media&token=1484df81-b28b-429b-af9a-57f2a3ca7647')">
	
<Header/>

<Deti/>

<h1 class="text-6xl font-bold text-center text-black">Váš praktický lékař pro děti a dorost.</h1>

<ONas/>

<Aktuality/>

<Karty/>

<h1 class="text-3xl mt-16 font-bold text-center text-black">Seznam smluvních pojišťoven:</h1>

<div class="w-full">
    
    <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/pji.png?alt=media&token=8d3e2883-df3a-4c14-8ae7-ab1000eed008" alt="Děti" class="w-1591.2 h-451 object-contain">

</div>
  
<footer>

</footer>
</body>