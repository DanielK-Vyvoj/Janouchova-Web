
<script lang="ts">

    import Header from "../../komponenty/web/Header.svelte";
    import Deti from "../../komponenty/web/Deti.svelte";
    import Karty from "../../komponenty/web/Karty.svelte";
  

    const data = [
    { name: "Vyšetření na ŘP", price: "400kč" },
    { name: "Rozšíření ŘP", price: "250kč" },
    { name: "Vyplnění úrazové pojistky, bolestného, trvalých následků", price: "250kč" },
    { name: "Dokumentace úrazu", price: "50kč" },
    { name: "Výpis zdravotní dokumentace (brigády, zaměstnání)", price: "200kč" },
    { name: "Vystavení potravinářského průkazu", price: "100kč" },
    { name: "Potvrzení přihlášky do MŠ", price: "100kč" },
    { name: "Potvrzení přihlášky na SOU, SŠ, VŠ", price: "150kč" },
    { name: "Aplikace nepovinného očkovaní", price: "150kč" },
    { name: "Nastřelení náušnic (jedna náušnice)", price: "250kč" },
  ];

</script>

<body  class="bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/POZADI-1.gif?alt=media&token=1484df81-b28b-429b-af9a-57f2a3ca7647')">
    <Header/>
    <Deti/>
    <h1 class="text-6xl font-bold text-center text-black">Ceník</h1>
    
    <div class="container mx-auto">
        <table class="table-auto border-collapse w-full">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 text-left font-semibold">Služba</th>
              <th class="py-2 px-4 text-right font-semibold">Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Vyšetření na ŘP</td>
              <td class="py-2 px-4 text-right">400Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Rozšíření ŘP</td>
              <td class="py-2 px-4 text-right">250Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Vyplnění úrazové pojistky, bolestného, trvalých následků</td>
              <td class="py-2 px-4 text-right">250Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Dokumentace úrazu</td>
              <td class="py-2 px-4 text-right">50Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Výpis zdravotní dokumentace (brigády, zaměstnání)</td>
              <td class="py-2 px-4 text-right">200Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Vystavení potravinářského průkazu</td>
              <td class="py-2 px-4 text-right">100Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Potvrzení přihlášky do MŠ</td>
              <td class="py-2 px-4 text-right">100Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td class="py-2 px-4">Potvrzení přihlášky na SOU, SŠ, VŠ</td>
              <td class="py-2 px-4 text-right">150Kč</td>
            </tr>
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td class="py-2 px-4">Aplikace nepovinného očkovaní	</td>
                <td class="py-2 px-4 text-right">150Kč</td>
              </tr>
              <tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td class="py-2 px-4">Nastřelení náušnic (jedna náušnice)</td>
                <td class="py-2 px-4 text-right">250Kč</td>
              </tr> 
      </body>

      <Karty/>