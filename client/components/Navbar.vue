<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink :to="{ name: 'search' }">search</NuxtLink>
    <NuxtLink :to="{ name: 'search-files' }">files</NuxtLink>
  </nav>
</template>