# ZLang

A toy language I'm working on as an educational project.

I will be working on this in parallel with building an interpretter for the "Monkey" language with Go
as described in the book book: [_Writing An Interpreter In Go_ by Thorsten Ball](https://interpreterbook.com/)

My work on the Monkey interpretter will be faithful to the books instructions.
_This_ project will allow me to be a bit more creative and experimental.
I'll try to make more bold choices, and experiment with patterns.
I suspect this will lead me down many wrong paths, but that's how I'll learn!

## The "Zlang" language

Key features:

- interpretted language
- meaningful whitespace, minimal keywords
- functional-leaning
- built-in function pipelines
- human-readable identifiers which allow whitespace

### Comments

Comments are enclosed in brackets.

#### multi-line

```
[
    Here is a comment block
    With multiple lines
]
```

#### single line

```
[This is a single line comment]
```

#### in-line

```
math function [this function does maths!]
    (_ + 2 [ add 2 ]) * 3 [ then multiply by 3 ]
```

### Values

Zlang will not actually support variables or mutation.

Declarations happen by putting an identifier on its own line, then assigning on subsequent, indented line(s)

```
my value
    3
some computed value
    my value * 2
```

### Functions

Functions _are_ values in ZLang. They are _first-class_ citizens that can be passed around
_All_ ZLang functions are unary. They _must_ take a single argument.
That argument is refernced as `_` in the function body.

```
my number
    3
add one
    _ + 3
```

Functions are exectued by indenting function(s) under a data value.

```
result [ result is 4 ]
    3
        add one

```

#### Function composition

Functions with multiple lines in the body are compositions.

```
add one
    _ + 1
times three
    _ * 3
add one then triple then divide by two
    add one
    times three
    _ / 2

my number
    3

result [ result is 6 ]
    my number
        add one then triple then divide by two
```

## The Zlang interpretter

I'll be authoring the Zlang interpretter in Typescript.
I will be trying to empasize readability and elegance over performance and robustness.

More details to come...
