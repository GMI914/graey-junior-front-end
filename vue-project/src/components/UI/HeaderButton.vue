<template>
    <button>
        <slot />
    </button>
</template>

<script>
export default {
    name: 'HeaderButton'
}
</script>

<style scoped>
button {
    border: 1px solid transparent;
    border-radius: 10px;
    background: transparent;
    height: 40px;
    min-width: 80px;
    font-size: 13px;
    font-weight: bold;
    line-height: 40px;
    padding: 0 12px;
    margin: 0 5px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

button::before,
button::after {
    content: '';
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 0 4px #ffffff;
    height: 200%;
    width: 1px;
    transform: rotate(45deg);
    top: -20px;
    right: -30px;
}

button::after {
    right: -50px;
}

button:hover {
    border: 1px solid #ffffff;
}

button:hover::before,
button:hover::after {
    transition: all 0.5s linear;
}

button:hover::before {
    right: calc(100% + 50px);
}

button:hover::after {
    right: calc(100% + 30px);
}
</style>