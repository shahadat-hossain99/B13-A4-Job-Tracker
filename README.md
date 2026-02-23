## **ANSWER**

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans:**

1.  ==getElementById== is a method of selecting an element with it's id. The id is unique and specific for single element.
2.  On the other hand, ==getElementsByClassName== targets all the element which have same and specific class name . In this method, it returns an array like object
3.  Moreover, ==querySelector== method search by css selector and returns 1st element in the document
4.  ==querySelectorAll( )== is like querySelector but it returns all the element which match the required css selector and returns a nodeList

### 2. How do you create and insert a new element into the DOM?

**Ans:** To do that, we have to use ==document.createElement()== to create a new element and after that we need a method called ==appendChild()== or ==append()== to add the newly created elemet into the parent.

### 3. What is Event Bubbling? And how does it work?

**Ans:** Event bubbling is a mechanism of JavaScript .When a event happend on a element, it take its parent than its's parent. it goes on and on until the root element

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Ans:** ==Event Delegation== is a technique for handling events efficiently in javaScript . It is very useful because we don't have to use multiple event listener on every child of a parent element . a single event listener on their parent can handle everyone

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**Ans:**

1. ==preventDefault()== only stops browser's default action. on the other hand , stopPropagation() method stops event bubbling immediately where it used

<!-- I 1st write it on obsidian than paste here for that the many symbol is showing  -->

🚀 Author--------

Md.Shahadat Hossain
Aspiring Junior Web Developer
Frontend Development
