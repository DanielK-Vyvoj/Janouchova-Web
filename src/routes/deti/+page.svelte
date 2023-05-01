<script>
      import { onMount } from 'svelte';
      import Header from "../../komponenty/web/Header.svelte";
    import Deti from "../../komponenty/web/Deti.svelte";
    import Karty from "../../komponenty/web/Karty.svelte";


    export let imageUrls = [
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/om.jpg?alt=media&token=f27b9d07-a995-46d0-80bc-dbf2692a8cbd',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/b.jpg?alt=media&token=5800ec6a-b149-4545-9b28-f89a382e85d1',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/ca.jpg?alt=media&token=cd04a08f-99ca-49cf-a5a2-38f0e9f8f964',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/xvx.jpg?alt=media&token=b08272b3-1414-4da2-abc4-4bb0865cd74f',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/y.jpg?alt=media&token=48c965d7-2ebc-4439-9ed2-10a89fc9a66d',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/xvx.jpg?alt=media&token=b08272b3-1414-4da2-abc4-4bb0865cd74f',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/v.jpg?alt=media&token=71b63abc-2f62-414e-9443-a523cb8afd36',
    'https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/sssa.jpg?alt=media&token=3d6633ec-9f78-4290-97a9-7fa308f648f2',
  ];

</script>


<body  class="bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/POZADI-1.gif?alt=media&token=1484df81-b28b-429b-af9a-57f2a3ca7647')">
    <Header/>
    <Deti/>
    <h1 class="text-6xl font-bold text-center text-black">Omalovánky</h1>

    <div class="flex justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {#each imageUrls as url}
            <div class="bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img src="{url}" alt="" class="w-full h-64 object-cover">
            </div>
          {/each}
        </div>
      </div>
     


</body>
<Karty/>

<style>
    .grid {
      width: 100%;
      max-width: 800px;
    }
  </style>