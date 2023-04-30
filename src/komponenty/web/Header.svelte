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
  </script>
<nav class="fixed top-0 left-0 w-full z-10 bg-opacity-50 backdrop-filter backdrop-blur-md p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="logo ml-36">
        <img src="https://firebasestorage.googleapis.com/v0/b/jk-app-24506.appspot.com/o/cropped-B714C30F-3A65-4AE0-A609-1F98CE3A39DE.png?alt=media&token=a07f0ddc-694e-4383-950a-c4cc8ca24628" alt="Logo" class="h-36">
      </div>
      <ul class="flex items-center space-x-8">
        <li><a href="#" class="text-white hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-pink-400">Domů</a></li>
        <li><a href="#" class="text-white hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-red-400">O nás</a></li> 
        <li><a href="#" class="text-white hover:bg-green-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-green-400">Kontakt</a></li>
        <li><a href="#" class="text-white hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg py-1 px-3 bg-blue-400">Pro děti</a></li>
      </ul>
      <button class="animate-btn bg-green-500 text-white font-bold py-2 px-4 rounded mr-36">
        Zavolejte do ordinace
      </button>
    </div>
  </nav>
  
  
  
  
  
  
  
