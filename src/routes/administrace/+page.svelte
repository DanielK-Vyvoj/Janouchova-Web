<script lang="ts">
    import { onMount } from 'svelte';
    import io from 'socket.io-client';
    import { readable } from 'svelte/store';
  
    const socket = io('http://janouchova-kremze.cz');
  
    const onlineUsers = readable(0, (set) => {
      socket.on('onlineUsers', (count) => {
        set(count);
      });
  
      return () => {
        socket.off('onlineUsers');
      };
    });
  
    onMount(() => {
      socket.emit('newUser');
    });
  </script>
  
  <p>Online users: {$onlineUsers}</p>
  