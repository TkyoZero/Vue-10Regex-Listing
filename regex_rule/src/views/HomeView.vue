<template>
  <main class="bg-white-200 font-display">
    <Header class=""/>
    <div class="grid grid-cols-2 gap-4">
      <RegexListing 
      v-for="item in all_regex" 
      :key="item.id" 
      v-bind="item" 
      />
    </div>
    <Footer class=""/>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import RegexListing from '@/components/RegexListing.vue';

const all_regex = ref([
  {
    id: 1,
    title: 'Start of string or line',
    character: '^',
    description: 'Matches the beginning of the string or line.',
    example: 'For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".'
  },
  {
    id: 2,
    title: 'End of string or line',
    character: '$',
    description: 'Matches the end of the string or line.',
    example: 'For example, /t$/ does not match the "t" in "eater", but does match it in "eat".'
  },
  {
    id: 3,
    title: 'Asterisk',
    character: '*',
    description: 'Expression matches zero or more.',
    example: 'For example, /bo*/ matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted".'
  },
  {
    id: 4,
    title: 'Plus',
    character: '+',
    description: 'Expression matches one or more.',
    example: 'For example, /a+/ matches the "a" in "candy" and all the "a"s in "caaaaaaandy", but nothing in "cndy".'
  },
  {
    id: 5,
    title: 'Quantifier',
    character: '{n,m}',
    description: 'Expression matches within specified ranges.',
    example: 'For example, /a{1,3}/ matches nothing in "cndy", the "a" in "candy", the two "a"s in "caandy", and the first three "a"s in "caaaaaaandy".'
  },
  {
    id: 6,
    title: 'Character set',
    character: '[xyz]',
    description: 'Matches any character in the set.',
    example: 'For example, [abcd] is the same as [a-d]. They match the "b" in "brisket", and the "c" in "chop".'
  },
  {
    id: 7,
    title: 'Negated character set',
    character: '[^xyz]',
    description: 'Matches any character not in the set.',
    example: 'For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".'
  },
  {
    id: 8,
    title: 'Wildcard',
    character: '.',
    description: 'Matches any character except line breaks.',
    example: 'For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day", as there is no character before "y" in "yes".'
  },
  {
    id: 9,
    title: 'Word',
    character: '\\w',
    description: 'Matches any alphanumeric character. Including the underline.',
    example: 'For example, /\\w/ matches "a" in "apple", "5" in "$5.28", "3" in "3D" and "m" in "Émanuel".'
  },
  {
    id: 10,
    title: 'Digit',
    character: '\\d',
    description: 'Matches any numeric character.',
    example: 'For example, /\\d/ or /[0-9]/ matches "2" in "B2 is the suite number".'
  }
]);
</script>