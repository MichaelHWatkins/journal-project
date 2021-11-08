import {Entry} from "./journal.js";
$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    const title = $('#title').val();
    const body = $('#body').val();
    const entry = new Entry(title, body);
    const response = entry.numWords();
    const response2 = entry.numVowels();
    const response3 = entry.numConsonants();
    const response4 = entry.getTeaser();
    $('#output').html( response + response2 + response3 + response4 );
  });
});