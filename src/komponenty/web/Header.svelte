<style>
  body {
    overflow: hidden;
  }
  .navbar {
    background-color: white;
  }
  .navbar ul {
    display: none;
  }
  .navbar.active ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background-color: white;
    padding: 20px;
    z-index: 100;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .navbar li {
    margin-bottom: 10px;
  }
  .navbar li:last-child {
    margin-bottom: 0;
  }
  .navbar a {
    display: block;
    padding: 10px 0;
    text-align: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  .navbar a:hover {
    background-color: #efefef;
    color: black;
  }
  .menu-icon {
    display: block;
    width: 40px;
    height: 40px;
    background-image: url('https://cdn-icons-png.flaticon.com/512/60/60992.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    cursor: pointer;
  }
  .menu-icon.active {
    transform: rotate(90deg);
  }
  @media (min-width: 768px) {
    .navbar ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
    .navbar li {
      margin-bottom: 0;
    }
    .navbar li:not(:last-child) {
      margin-right: 20px;
    }
    .navbar a {
      padding: 10px 20px;
    }
    .menu-icon {
      display: none;
    }
  }
</style>
<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
        }
        .animate-btn {
            animation: pulse 2s infinite;
        }
      `;
      document.head.appendChild(style);
    });
    function handleClick() {
    // Zde můžete vložit kód, který zavolá na dané telefonní číslo
    // Například:
    window.location.href = 'tel:+420 380 741 055';
  }
</script>

<nav class="navbar fixed top-0 left-0 w-full z-10 bg-opacity-50 backdrop-filter backdrop-blur-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo ml-36">
        <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/cropped-B714C30F-3A65-4AE0-A609-1F98CE3A39DE.png?alt=media&token=a07f0ddc-694e-4383-950a-c4cc8ca24628" alt="Logo" class="h-36">
      </div>
      <ul class="flex items-center space-x-8">
        <li><a href="/" class="text-white hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-pink-400">Domů</a></li>
        <li><a href="/sluzby" class="text-white hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-red-400">Služby</a></li> 
        <li><a href="/cenik" class="text-white hover:bg-green-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-green-400">Ceník</a></li>
        <li><a href="/deti" class="text-white hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-blue-400">Pro děti</a></li>
      </ul>
      <button class="animate-btn bg-green-500 text-white font-bold py-2 px-4 rounded mr-36" on:click={handleClick}>
        Zavolejte do ordinace
      </button>
    </div>
  </nav>

  
  
  
  
  
  
