import { defineStore } from 'pinia';
import { ref, computed } from 'vue'; 

export const useCoreStore = defineStore('core', () => {
    let isCollapse = ref(false);
    const setIsCollapse = (payload) => {
        console.log(payload);
        isCollapse = payload;
    }

    return {isCollapse, setIsCollapse};

})