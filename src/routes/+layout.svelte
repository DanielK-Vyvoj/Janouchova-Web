<script lang="ts">

import "../app.css";
import Header from "../komponenty/web/Header.svelte";
import Deti from "../komponenty/web/Deti.svelte";
</script>
<body  class="bg-fixed bg-no-repeat bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/POZADI-1.gif?alt=media&token=1484df81-b28b-429b-af9a-57f2a3ca7647')">

<Header/>
<Deti/>
<slot />

</body>