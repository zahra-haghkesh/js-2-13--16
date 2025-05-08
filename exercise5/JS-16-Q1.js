// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()


Event bubbling means that when an event is triggered on an element, it propagates (bubbles) up through its ancestors in the DOM tree. While this is often useful, it can be problematic in certain cases:

 Problems it can cause::

1-Unintended side effects:
A parent element might have an event listener that reacts to a child element’s event, even when it shouldn't.

2-Hard to debug:
When many elements share the same event type, it's difficult to trace which listener triggered what behavior.

3-Conflicts:
Especially in large applications or when integrating third-party code, event bubbling can lead to conflicting behaviors between components.

