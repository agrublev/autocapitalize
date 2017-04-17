# autocapitalize
A polyfill of sorts, allowing you to do autocapitalize words, sentences, characters in any browser

Simple usage: 
```$.autocapitalize();
```
will automatically use the existing html attribute autocapitalize and read its value

Options are: 
- words 
- sentences
- characters

You can also call it on elements you choose and even force a specific type of capitalization
```$("input.auto_words").autocapitalize({mode:"words"});
```
