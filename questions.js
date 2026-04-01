const quizData = {
    "Artificial Intelligence and Machine Learning": [
        {
            "question": "K-Means Clustering is an example of:",
            "options": {
                "a": "Supervised Learning",
                "b": "Unsupervised Learning",
                "c": "Reinforcement Learning",
                "d": "Deep Learning solely"
            },
            "answer": "b"
        },
        {
            "question": "Activation functions in neural networks are primarily meant to:",
            "options": {
                "a": "Multiply the data by weights",
                "b": "Add biases",
                "c": "Introduce non-linearity into the model",
                "d": "Discard low values automatically"
            },
            "answer": "c"
        },
        {
            "question": "When a model performs excellent on training data but poorly on test data, it is called:",
            "options": {
                "a": "Underfitting",
                "b": "Overfitting",
                "c": "Bias-Variance balance",
                "d": "Smoothing"
            },
            "answer": "b"
        },
        {
            "question": "Which algorithm is primarily used for classification problems?",
            "options": {
                "a": "Linear Regression",
                "b": "Decision Trees",
                "c": "Both a and b",
                "d": "Neither"
            },
            "answer": "b"
        },
        {
            "question": "The algorithmic process of minimizing output error in neural nets by updating weights backwards is:",
            "options": {
                "a": "Feed-forward error",
                "b": "Backpropagation",
                "c": "Rectification",
                "d": "Gradient Boosting"
            },
            "answer": "b"
        },
        {
            "question": "Reinforcement learning fundamentally relies on learning via:",
            "options": {
                "a": "Labeled dataset pairs",
                "b": "Interacting with an environment and receiving rewards or penalties",
                "c": "Finding hidden groupings",
                "d": "Minimizing squared errors only"
            },
            "answer": "b"
        },
        {
            "question": "NLP stands for:",
            "options": {
                "a": "Neural Language Programming",
                "b": "Natural Language Processing",
                "c": "Net Logic Protocol",
                "d": "Native Linters Processing"
            },
            "answer": "b"
        },
        {
            "question": "CNNs (Convolutional Neural Networks) are exceptionally good at finding patterns in:",
            "options": {
                "a": "Relational databases",
                "b": "Images and spatial data",
                "c": "Random numbers",
                "d": "Plain text strings"
            },
            "answer": "b"
        },
        {
            "question": "In a Support Vector Machine (SVM), the lines segregating classes are called:",
            "options": {
                "a": "Perceptrons",
                "b": "Hyperplanes",
                "c": "Decisions",
                "d": "Support clusters"
            },
            "answer": "b"
        },
        {
            "question": "Adding a bias term in a neural network is similar to:",
            "options": {
                "a": "Moving the entire function shape along an axis (y-intercept)",
                "b": "Changing the slope entirely",
                "c": "Nullifying negative inputs",
                "d": "Removing noisy pixels"
            },
            "answer": "a"
        }
    ],
    "Computer Architecture and Organization (CAO)": [
        {
            "question": "Which memory has the shortest access time?",
            "options": {
                "a": "Cache",
                "b": "Main Memory",
                "c": "Registers",
                "d": "Magnetic Disk"
            },
            "answer": "c"
        },
        {
            "question": "RISC stands for:",
            "options": {
                "a": "Reduced Instruction Set Computer",
                "b": "Rapid Instruction Set Computer",
                "c": "Real Instruction Set Computer",
                "d": "Relocatable Instruction Set Computer"
            },
            "answer": "a"
        },
        {
            "question": "A pipeline hazard that occurs due to data dependencies is called:",
            "options": {
                "a": "Structural hazard",
                "b": "Control hazard",
                "c": "Data hazard",
                "d": "Branch hazard"
            },
            "answer": "c"
        },
        {
            "question": "Which mapping method maps a main memory block to a single specific cache line?",
            "options": {
                "a": "Fully associative",
                "b": "Direct mapping",
                "c": "Set-associative",
                "d": "Dynamic mapping"
            },
            "answer": "b"
        },
        {
            "question": "In Immediate addressing mode, the operand:",
            "options": {
                "a": "Is in memory",
                "b": "Is stored in a register",
                "c": "Is explicitly given in the instruction",
                "d": "Depends on the PC"
            },
            "answer": "c"
        },
        {
            "question": "The component responsible for arithmetic and logic operations is:",
            "options": {
                "a": "Control Unit",
                "b": "Memory Unit",
                "c": "ALU",
                "d": "I/O Unit"
            },
            "answer": "c"
        },
        {
            "question": "Virtual memory is implemented using:",
            "options": {
                "a": "Registers",
                "b": "Cache",
                "c": "Hard drive as an extension of RAM",
                "d": "SSDs only"
            },
            "answer": "c"
        },
        {
            "question": "DMA is primarily used for:",
            "options": {
                "a": "High-speed CPU calculations",
                "b": "Direct memory transfer by I/O devices without CPU involvement",
                "c": "Storing cache",
                "d": "Halting the system"
            },
            "answer": "b"
        },
        {
            "question": "The Von Neumann architecture bottleneck is caused largely by:",
            "options": {
                "a": "The ALU",
                "b": "Shared bus for instructions and data",
                "c": "High clock speeds",
                "d": "Multiple processors"
            },
            "answer": "b"
        },
        {
            "question": "The Program Counter (PC) stores the:",
            "options": {
                "a": "Instruction currently executing",
                "b": "Result of the ALU",
                "c": "Address of the next instruction to be fetched",
                "d": "Stack pointer"
            },
            "answer": "c"
        }
    ],
    "Compiler Design": [
        {
            "question": "Which phase of the compiler produces tokens?",
            "options": {
                "a": "Lexical Analyzer",
                "b": "Syntax Analyzer",
                "c": "Semantic Analyzer",
                "d": "Code Generator"
            },
            "answer": "a"
        },
        {
            "question": "Which phase constructs a parse tree?",
            "options": {
                "a": "Lexical Analyzer",
                "b": "Syntax Analyzer (Parser)",
                "c": "Intermediate Code Generator",
                "d": "Code Optimizer"
            },
            "answer": "b"
        },
        {
            "question": "A Symbol Table is used throughout the compiler to:",
            "options": {
                "a": "Minimize tree structures",
                "b": "Store variable details, scopes, and types",
                "c": "Compile machine code",
                "d": "Process linker commands"
            },
            "answer": "b"
        },
        {
            "question": "Semantic analysis checks for:",
            "options": {
                "a": "Syntax errors",
                "b": "Lexical errors",
                "c": "Type mismatches and logic cohesion",
                "d": "Intermediate code size"
            },
            "answer": "c"
        },
        {
            "question": "YACC is a tool used to generate:",
            "options": {
                "a": "Lexical analyzers",
                "b": "Syntax analyzers (Parsers)",
                "c": "Optimized code",
                "d": "Native assemblers"
            },
            "answer": "b"
        },
        {
            "question": "Common Subexpression Elimination is a technique in:",
            "options": {
                "a": "Lexical analysis",
                "b": "Parsing",
                "c": "Code optimization",
                "d": "Symbol table management"
            },
            "answer": "c"
        },
        {
            "question": "Top-down parsers normally use:",
            "options": {
                "a": "Rightmost derivation in reverse",
                "b": "Leftmost derivation",
                "c": "Non-deterministic derivations",
                "d": "Bottom-up derivation"
            },
            "answer": "b"
        },
        {
            "question": "LR parsers are fundamentally:",
            "options": {
                "a": "Top-down parsers",
                "b": "Bottom-up parsers",
                "c": "Predictive parsers",
                "d": "Recursive descent parsers"
            },
            "answer": "b"
        },
        {
            "question": "The output of intermediate code generation is often represented as:",
            "options": {
                "a": "Assembly code",
                "b": "Three-address code",
                "c": "Machine code",
                "d": "Executable"
            },
            "answer": "b"
        },
        {
            "question": "An Abstract Syntax Tree (AST) differs from a parse tree in that it:",
            "options": {
                "a": "Omits syntax details like brackets and focuses on semantic structure",
                "b": "Is much larger",
                "c": "Only stores variables",
                "d": "Is read bottom-up"
            },
            "answer": "a"
        }
    ],
    "Cryptography and Network Security": [
        {
            "question": "AES stands for:",
            "options": {
                "a": "Asymmetric Encryption Standard",
                "b": "Advanced Encryption System",
                "c": "Advanced Encryption Standard",
                "d": "Applied Encryption Standard"
            },
            "answer": "c"
        },
        {
            "question": "In symmetric-key encryption:",
            "options": {
                "a": "The sender and receiver share the same secret key",
                "b": "There is a public and private key",
                "c": "Keys are generated randomly for every packet",
                "d": "Keys are sent plainly over the internet layer"
            },
            "answer": "a"
        },
        {
            "question": "Which algorithm is a prominent public-key asymmetric algorithm?",
            "options": {
                "a": "DES",
                "b": "AES",
                "c": "RSA",
                "d": "MD5"
            },
            "answer": "c"
        },
        {
            "question": "In public-key cryptography, to enforce confidentiality, the sender encrypts data using:",
            "options": {
                "a": "Receiver's public key",
                "b": "Sender's private key",
                "c": "Receiver's private key",
                "d": "Sender's public key"
            },
            "answer": "a"
        },
        {
            "question": "A hash function transforms data into a fixed-size string of characters. A key property is:",
            "options": {
                "a": "It is easily reversible",
                "b": "It is collision-resistant",
                "c": "It always outputs different sizes",
                "d": "It only accepts integers"
            },
            "answer": "b"
        },
        {
            "question": "Which of the following provides secure communication over a network securely by encrypting HTTP?",
            "options": {
                "a": "FTP",
                "b": "SSH",
                "c": "SSL/TLS",
                "d": "SMTP"
            },
            "answer": "c"
        },
        {
            "question": "In a Man-in-the-Middle (MITM) attack, the attacker:",
            "options": {
                "a": "Denies service to the server",
                "b": "Intercepts and potentially alters communications between two parties",
                "c": "Floods the network with pings",
                "d": "Brute forces passwords directly"
            },
            "answer": "b"
        },
        {
            "question": "A Digital Signature provides:",
            "options": {
                "a": "Confidentiality only",
                "b": "Availability",
                "c": "Authentication and Non-repudiation",
                "d": "Phishing protection"
            },
            "answer": "c"
        },
        {
            "question": "A firewall's primary purpose is to:",
            "options": {
                "a": "Scan for viruses in emails",
                "b": "Encrypt all traffic to the internet",
                "c": "Control incoming and outgoing network traffic based on rules",
                "d": "Boost internet speed"
            },
            "answer": "c"
        },
        {
            "question": "Symmetric encryption is generally:",
            "options": {
                "a": "Slower than asymmetric encryption",
                "b": "Faster than asymmetric encryption",
                "c": "Not used anymore",
                "d": "Very inefficient for large data streams"
            },
            "answer": "b"
        }
    ],
    "Database Management Systems (DBMS)": [
        {
            "question": "Who proposed the relational model for databases?",
            "options": {
                "a": "E.F. Codd",
                "b": "Charles Babbage",
                "c": "Ada Lovelace",
                "d": "Alan Turing"
            },
            "answer": "a"
        },
        {
            "question": "Which normal form eliminates transitive dependencies?",
            "options": {
                "a": "1NF",
                "b": "2NF",
                "c": "3NF",
                "d": "BCNF"
            },
            "answer": "c"
        },
        {
            "question": "The ACID properties include Atomicity, Consistency, Isolation, and:",
            "options": {
                "a": "Dependence",
                "b": "Database",
                "c": "Durability",
                "d": "Detection"
            },
            "answer": "c"
        },
        {
            "question": "Which SQL statement is used to remove a table entirely from the database?",
            "options": {
                "a": "DELETE TABLE",
                "b": "DROP TABLE",
                "c": "TRUNCATE TABLE",
                "d": "REMOVE TABLE"
            },
            "answer": "b"
        },
        {
            "question": "A primary key is used to:",
            "options": {
                "a": "Link tables",
                "b": "Allow null records",
                "c": "Uniquely identify a record in a table",
                "d": "Optimize reading speeds solely"
            },
            "answer": "c"
        },
        {
            "question": "In ER diagrams, weak entities are represented by:",
            "options": {
                "a": "Single rectangle",
                "b": "Double rectangle",
                "c": "Diamond",
                "d": "Double ellipse"
            },
            "answer": "b"
        },
        {
            "question": "B-trees are mostly used for:",
            "options": {
                "a": "File searching",
                "b": "Database indexing",
                "c": "Graph algorithms",
                "d": "String matching"
            },
            "answer": "b"
        },
        {
            "question": "Which language is used for defining table schemas?",
            "options": {
                "a": "DML",
                "b": "DCL",
                "c": "DDL",
                "d": "TCL"
            },
            "answer": "c"
        },
        {
            "question": "A foreign key enforces:",
            "options": {
                "a": "Referential integrity",
                "b": "Domain integrity",
                "c": "Entity integrity",
                "d": "Check constraints"
            },
            "answer": "a"
        },
        {
            "question": "A transaction that successfully completes all its operations enters the:",
            "options": {
                "a": "Partially committed state",
                "b": "Aborted state",
                "c": "Committed state",
                "d": "Active state"
            },
            "answer": "c"
        }
    ],
    "Digital Logic and Design": [
        {
            "question": "The Boolean expression A + A'B simplifies to:",
            "options": {
                "a": "A",
                "b": "B",
                "c": "A + B",
                "d": "A' + B"
            },
            "answer": "c"
        },
        {
            "question": "Which gates are considered universal gates?",
            "options": {
                "a": "AND, OR",
                "b": "NAND, NOR",
                "c": "XOR, XNOR",
                "d": "NOT, NAND"
            },
            "answer": "b"
        },
        {
            "question": "A multiplexer with n selector lines has how many inputs?",
            "options": {
                "a": "n",
                "b": "n^2",
                "c": "2^n",
                "d": "2n"
            },
            "answer": "c"
        },
        {
            "question": "A flip-flop is a:",
            "options": {
                "a": "Combinational logic circuit bit",
                "b": "Circuit that stores 1 bit of memory",
                "c": "A switch",
                "d": "Gate with 3 inputs"
            },
            "answer": "b"
        },
        {
            "question": "Which flip-flop toggles its output exactly when triggered?",
            "options": {
                "a": "D flip-flop",
                "b": "T flip-flop",
                "c": "SR flip-flop",
                "d": "JK flip-flop (with specific inputs)"
            },
            "answer": "b"
        },
        {
            "question": "A combinational logic circuit's output depends:",
            "options": {
                "a": "Only on current inputs",
                "b": "On previous state and inputs",
                "c": "Only on clocks",
                "d": "Only on past outputs"
            },
            "answer": "a"
        },
        {
            "question": "An encoder converts:",
            "options": {
                "a": "Binary to decimal",
                "b": "Decimal to BCD or Binary",
                "c": "Parallel data to serial",
                "d": "Serial data to parallel"
            },
            "answer": "b"
        },
        {
            "question": "Karnaugh-Maps (K-maps) are used to:",
            "options": {
                "a": "Convert analog to digital",
                "b": "Simplify boolean expressions",
                "c": "Draw logic gates",
                "d": "Determine voltage levels"
            },
            "answer": "b"
        },
        {
            "question": "The binary equivalent of decimal 13 is:",
            "options": {
                "a": "1011",
                "b": "1101",
                "c": "1111",
                "d": "1001"
            },
            "answer": "b"
        },
        {
            "question": "A full-adder logic circuit adds:",
            "options": {
                "a": "2 binary bits",
                "b": "3 binary bits (two bits and a carry)",
                "c": "4 logic bits",
                "d": "8 bits"
            },
            "answer": "b"
        }
    ],
    "Discrete Mathematics": [
        {
            "question": "In propositional logic, P AND (Q OR R) is equivalent to:",
            "options": {
                "a": "(P OR Q) AND (P OR R)",
                "b": "(P AND Q) OR (P AND R)",
                "c": "(P AND Q) AND (P AND R)",
                "d": "(P OR Q) OR (P OR R)"
            },
            "answer": "b"
        },
        {
            "question": "A graph with no cycles is called a:",
            "options": {
                "a": "Complete graph",
                "b": "Bipartite graph",
                "c": "Tree",
                "d": "Directed acyclic graph"
            },
            "answer": "c"
        },
        {
            "question": "The number of subsets for a set with n elements is:",
            "options": {
                "a": "n^2",
                "b": "2n",
                "c": "2^n",
                "d": "n!"
            },
            "answer": "c"
        },
        {
            "question": "If A and B are disjoint sets, then the cardinality of (A union B) is:",
            "options": {
                "a": "|A| * |B|",
                "b": "|A| + |B|",
                "c": "|A| - |B|",
                "d": "0"
            },
            "answer": "b"
        },
        {
            "question": "A relation which is reflexive, symmetric, and transitive is known as a(n):",
            "options": {
                "a": "Partial order relation",
                "b": "Equivalence relation",
                "c": "Empty relation",
                "d": "Universal relation"
            },
            "answer": "b"
        },
        {
            "question": "The Pigeonhole Principle states that if k pigeons are distributed among n holes and k > n:",
            "options": {
                "a": "At least one hole has no pigeon",
                "b": "At least one hole has exactly 2 pigeons",
                "c": "At least one hole has more than one pigeon",
                "d": "All holes are empty"
            },
            "answer": "c"
        },
        {
            "question": "Which of the following is the chromatic number of a bipartite graph with at least one edge?",
            "options": {
                "a": "1",
                "b": "2",
                "c": "3",
                "d": "4"
            },
            "answer": "b"
        },
        {
            "question": "In a simple undirected graph, the sum of degrees of all vertices is:",
            "options": {
                "a": "Equal to the number of edges",
                "b": "Twice the number of edges",
                "c": "Thrice the number of edges",
                "d": "Zero"
            },
            "answer": "b"
        },
        {
            "question": "De Morgan's Laws state that the complement of (A union B) is:",
            "options": {
                "a": "A' union B'",
                "b": "A' intersection B'",
                "c": "A intersection B",
                "d": "A' intersection B"
            },
            "answer": "b"
        },
        {
            "question": "A function f: A -> B is bijective if it is:",
            "options": {
                "a": "Injective only",
                "b": "Surjective only",
                "c": "Both injective and surjective",
                "d": "Neither injective nor surjective"
            },
            "answer": "c"
        }
    ],
    "Data Structures and Algorithms (DSA)": [
        {
            "question": "The average case time complexity of Quick Sort is:",
            "options": {
                "a": "O(n)",
                "b": "O(n log n)",
                "c": "O(n^2)",
                "d": "O(log n)"
            },
            "answer": "b"
        },
        {
            "question": "Which data structure is used for Breadth-First Search (BFS)?",
            "options": {
                "a": "Stack",
                "b": "Queue",
                "c": "Tree",
                "d": "Graph"
            },
            "answer": "b"
        },
        {
            "question": "In a BST, the in-order traversal gives elements in:",
            "options": {
                "a": "Random order",
                "b": "Decreasing order",
                "c": "Increasing order",
                "d": "No specific order"
            },
            "answer": "c"
        },
        {
            "question": "Which algorithmic paradigm does Merge Sort use?",
            "options": {
                "a": "Greedy",
                "b": "Dynamic Programming",
                "c": "Divide and Conquer",
                "d": "Backtracking"
            },
            "answer": "c"
        },
        {
            "question": "A graph is represented internally mostly through:",
            "options": {
                "a": "Adjacency matrix or Adjacency list",
                "b": "Hash Table",
                "c": "Binary Tree",
                "d": "Stack"
            },
            "answer": "a"
        },
        {
            "question": "A hash table collision occurs when:",
            "options": {
                "a": "Two keys map to different indices",
                "b": "Two keys map to the same index",
                "c": "Key cannot be hashed",
                "d": "Hash table is empty"
            },
            "answer": "b"
        },
        {
            "question": "The data structure used in evaluating postfix expressions is:",
            "options": {
                "a": "Queue",
                "b": "Stack",
                "c": "Linked List",
                "d": "Array"
            },
            "answer": "b"
        },
        {
            "question": "In a max-heap, the parent node is always:",
            "options": {
                "a": "Greater than or equal to its children",
                "b": "Less than its children",
                "c": "Fixed to 0",
                "d": "Equal to its children"
            },
            "answer": "a"
        },
        {
            "question": "Dynamic programming is mainly used to solve:",
            "options": {
                "a": "Shortest path only",
                "b": "Optimization problems by breaking them into overlapping subproblems",
                "c": "Sorting algorithms",
                "d": "Searching arrays"
            },
            "answer": "b"
        },
        {
            "question": "An AVL tree maintains its balance factor in the range:",
            "options": {
                "a": "-1 to 1",
                "b": "-2 to 2",
                "c": "0 to 2",
                "d": "-1 to 0"
            },
            "answer": "a"
        }
    ],
    "Microprocessors and Microcontrollers": [
        {
            "question": "The 8085 microprocessor has how many address lines?",
            "options": {
                "a": "8",
                "b": "16",
                "c": "20",
                "d": "32"
            },
            "answer": "b"
        },
        {
            "question": "The maximum memory that an 8085 microprocessor can address is:",
            "options": {
                "a": "64 KB",
                "b": "1 MB",
                "c": "16 MB",
                "d": "4 KB"
            },
            "answer": "a"
        },
        {
            "question": "An interrupt which cannot be ignored by the microprocessor is called a:",
            "options": {
                "a": "Maskable interrupt",
                "b": "Non-maskable interrupt (NMI)",
                "c": "Software interrupt",
                "d": "Pending interrupt"
            },
            "answer": "b"
        },
        {
            "question": "The Program Counter (PC) primarily tracks:",
            "options": {
                "a": "Variable counts",
                "b": "The memory address of the next instruction to be executed",
                "c": "Loops in an assembly program",
                "d": "Arithmetic carries"
            },
            "answer": "b"
        },
        {
            "question": "Which is fundamentally true for a microcontroller vs a microprocessor?",
            "options": {
                "a": "Microcontroller has CPU, memory, and I/O on a single chip; microprocessor only has a CPU",
                "b": "Microcontrollers are much faster",
                "c": "Microprocessors are embedded mostly in simple devices (like microwaves)",
                "d": "They are precisely the same string of components"
            },
            "answer": "a"
        },
        {
            "question": "The 8086 microprocessor has an instruction queue of what size?",
            "options": {
                "a": "2 bytes",
                "b": "4 bytes",
                "c": "6 bytes",
                "d": "8 bytes"
            },
            "answer": "c"
        },
        {
            "question": "Pipelining in modern processors is intended to:",
            "options": {
                "a": "Decrease overall clock speed",
                "b": "Allow executing multiple instructions simultaneously overlapping fetch, decode, and execute",
                "c": "Save cache memory",
                "d": "Disable software interrupts"
            },
            "answer": "b"
        },
        {
            "question": "The ALU flags register includes flags such as:",
            "options": {
                "a": "Zero flag, Carry flag, Sign flag",
                "b": "Run flag, Halt flag",
                "c": "Error flag, Debug flag",
                "d": "Stack flag, Heap flag"
            },
            "answer": "a"
        },
        {
            "question": "ARM microcontrollers heavily utilize which architecture principle?",
            "options": {
                "a": "CISC",
                "b": "RISC",
                "c": "Both completely heavily",
                "d": "Neither"
            },
            "answer": "b"
        },
        {
            "question": "Serial Communication in microcontrollers usually relies on internal modules like:",
            "options": {
                "a": "DMA",
                "b": "UART/USART",
                "c": "Arithmetic Unit",
                "d": "Timers"
            },
            "answer": "b"
        }
    ],
    "Computer Networks": [
        {
            "question": "The OSI model has how many layers?",
            "options": {
                "a": "5",
                "b": "6",
                "c": "7",
                "d": "8"
            },
            "answer": "c"
        },
        {
            "question": "The layer responsible for reliable delivery and error checking in TCP/IP is:",
            "options": {
                "a": "Network",
                "b": "Transport",
                "c": "Application",
                "d": "Data Link"
            },
            "answer": "b"
        },
        {
            "question": "ARP maps which addresses?",
            "options": {
                "a": "MAC to IP",
                "b": "IP to MAC",
                "c": "URL to IP",
                "d": "IP to Domain Name"
            },
            "answer": "b"
        },
        {
            "question": "TCP is:",
            "options": {
                "a": "Connectionless",
                "b": "Connection-oriented",
                "c": "Used for streaming real-time video mostly",
                "d": "Slower than IP internally"
            },
            "answer": "b"
        },
        {
            "question": "Which topology connects every node to a central switch/hub?",
            "options": {
                "a": "Bus",
                "b": "Ring",
                "c": "Star",
                "d": "Mesh"
            },
            "answer": "c"
        },
        {
            "question": "IPv4 addressing mechanism uses how many bits?",
            "options": {
                "a": "16",
                "b": "32",
                "c": "64",
                "d": "128"
            },
            "answer": "b"
        },
        {
            "question": "A router operates at which OSI layer?",
            "options": {
                "a": "Physical",
                "b": "Data Link",
                "c": "Network",
                "d": "Transport"
            },
            "answer": "c"
        },
        {
            "question": "DNS resolves:",
            "options": {
                "a": "MAC to IP",
                "b": "Domain names to IP addresses",
                "c": "IP to MAC",
                "d": "Ports to IPs"
            },
            "answer": "b"
        },
        {
            "question": "Checksums are primarily used to detect:",
            "options": {
                "a": "Intrusions",
                "b": "Data corruption",
                "c": "High latency",
                "d": "Congestion"
            },
            "answer": "b"
        },
        {
            "question": "The default port for HTTPS is:",
            "options": {
                "a": "80",
                "b": "21",
                "c": "443",
                "d": "25"
            },
            "answer": "c"
        }
    ],
    "Programming Fundamentals and Object-Oriented Programming (OOP)": [
        {
            "question": "Which of the following is not an OOP concept?",
            "options": {
                "a": "Encapsulation",
                "b": "Polymorphism",
                "c": "Compilation",
                "d": "Inheritance"
            },
            "answer": "c"
        },
        {
            "question": "Encapsulation is primarily used to:",
            "options": {
                "a": "Increase speed",
                "b": "Hide data",
                "c": "Provide code reuse",
                "d": "Delete old objects"
            },
            "answer": "b"
        },
        {
            "question": "Inheritance in OOP enables:",
            "options": {
                "a": "Data hiding",
                "b": "Code reusability",
                "c": "Object destruction",
                "d": "Memory management"
            },
            "answer": "b"
        },
        {
            "question": "Which access modifier restricts access to the defining class only?",
            "options": {
                "a": "Public",
                "b": "Protected",
                "c": "Private",
                "d": "Internal"
            },
            "answer": "c"
        },
        {
            "question": "Method overloading is an example of:",
            "options": {
                "a": "Compile-time polymorphism",
                "b": "Run-time polymorphism",
                "c": "Encapsulation",
                "d": "Abstraction"
            },
            "answer": "a"
        },
        {
            "question": "What is the process of defining more than one method with the same name but different parameters?",
            "options": {
                "a": "Overriding",
                "b": "Overloading",
                "c": "Masking",
                "d": "Hiding"
            },
            "answer": "b"
        },
        {
            "question": "In Java, which keyword is used to prevent a class from being inherited?",
            "options": {
                "a": "static",
                "b": "final",
                "c": "abstract",
                "d": "private"
            },
            "answer": "b"
        },
        {
            "question": "A class that cannot be instantiated is called:",
            "options": {
                "a": "Abstract class",
                "b": "Sealed class",
                "c": "Final class",
                "d": "Static class"
            },
            "answer": "a"
        },
        {
            "question": "Which feature allows a subclass to provide a specific implementation of a method already provided by its superclass?",
            "options": {
                "a": "Overloading",
                "b": "Overriding",
                "c": "Abstraction",
                "d": "Polymorphism"
            },
            "answer": "b"
        },
        {
            "question": "Objects are created using the ____ operator in languages like C++ and Java.",
            "options": {
                "a": "create",
                "b": "allocate",
                "c": "new",
                "d": "make"
            },
            "answer": "c"
        }
    ],
    "Operating Systems (OS)": [
        {
            "question": "Race condition implies:",
            "options": {
                "a": "Execution of instructions in a loop",
                "b": "The outcome of concurrent executions depends on sequence",
                "c": "Faster CPU processing",
                "d": "Multi-threaded scaling"
            },
            "answer": "b"
        },
        {
            "question": "Which scheduling algorithms avoids starvation usually?",
            "options": {
                "a": "Round Robin",
                "b": "FCFS",
                "c": "SJF",
                "d": "Priority Scheduling without aging"
            },
            "answer": "a"
        },
        {
            "question": "Deadlock requires which of the following conditions to be true?",
            "options": {
                "a": "Mutual exclusion",
                "b": "Hold and wait",
                "c": "Circular wait",
                "d": "All of the above"
            },
            "answer": "d"
        },
        {
            "question": "The phenomenon of a process spending more time paging than executing is called:",
            "options": {
                "a": "Context Switch",
                "b": "Swapping",
                "c": "Thrashing",
                "d": "Fragmentation"
            },
            "answer": "c"
        },
        {
            "question": "A binary semaphore takes values:",
            "options": {
                "a": "0 and 1 only",
                "b": "Any integer",
                "c": "Only negative values",
                "d": "Any positive integer"
            },
            "answer": "a"
        },
        {
            "question": "Context switching involves:",
            "options": {
                "a": "Turning off the system",
                "b": "Saving the state of an old process and loading the state of a new process",
                "c": "Deleting processes from memory",
                "d": "Swapping hardware"
            },
            "answer": "b"
        },
        {
            "question": "Which of the following is an internal fragmentation issue?",
            "options": {
                "a": "Dynamic partitioning",
                "b": "Paging",
                "c": "Segmentation",
                "d": "Virtual memory"
            },
            "answer": "b"
        },
        {
            "question": "Fork() is used to:",
            "options": {
                "a": "Kill a process",
                "b": "Duplicate a file",
                "c": "Create a new child process",
                "d": "Change process priority"
            },
            "answer": "c"
        },
        {
            "question": "Which memory allocation policy allocates the smallest hole that is big enough?",
            "options": {
                "a": "First-fit",
                "b": "Best-fit",
                "c": "Worst-fit",
                "d": "Next-fit"
            },
            "answer": "b"
        },
        {
            "question": "The core component of a Linux-based operating system is its:",
            "options": {
                "a": "Shell",
                "b": "Terminal",
                "c": "Kernel",
                "d": "GUI"
            },
            "answer": "c"
        }
    ],
    "Software Engineering": [
        {
            "question": "The waterfall model is heavily dependent on:",
            "options": {
                "a": "Early deployment",
                "b": "Frequent customer feedback",
                "c": "Upfront planning and clear requirements",
                "d": "Prototyping"
            },
            "answer": "c"
        },
        {
            "question": "Which is a recognized Agile framework?",
            "options": {
                "a": "Scrum",
                "b": "Spiral",
                "c": "V-Model",
                "d": "Waterfall"
            },
            "answer": "a"
        },
        {
            "question": "Coupling in software engineering refers to:",
            "options": {
                "a": "The interdependence between modules",
                "b": "The functional strength inside a single module",
                "c": "Number of lines of code",
                "d": "Deployment structures"
            },
            "answer": "a"
        },
        {
            "question": "Good software design promotes:",
            "options": {
                "a": "High coupling, low cohesion",
                "b": "Low coupling, high cohesion",
                "c": "High coupling, high cohesion",
                "d": "Low coupling, low cohesion"
            },
            "answer": "b"
        },
        {
            "question": "Testing done without looking at internal workings of the software is called:",
            "options": {
                "a": "White-box testing",
                "b": "Black-box testing",
                "c": "Gray-box testing",
                "d": "Unit testing"
            },
            "answer": "b"
        },
        {
            "question": "In SDLC, maintenance begins when:",
            "options": {
                "a": "Coding is done",
                "b": "Testing is done",
                "c": "Software is deployed to production",
                "d": "Requirements are gathered"
            },
            "answer": "c"
        },
        {
            "question": "UML stands for:",
            "options": {
                "a": "Universal Modeling Language",
                "b": "Unified Modeling Language",
                "c": "United Modeling Language",
                "d": "Unspecified Modeling Language"
            },
            "answer": "b"
        },
        {
            "question": "A design pattern dealing with object creation mechanisms is a:",
            "options": {
                "a": "Structural pattern",
                "b": "Behavioral pattern",
                "c": "Creational pattern",
                "d": "Deployment pattern"
            },
            "answer": "c"
        },
        {
            "question": "The Singleton pattern ensures:",
            "options": {
                "a": "A class is entirely private",
                "b": "A class has only one single instance globally",
                "c": "Only one method is exposed",
                "d": "Single inheritance is strictly followed"
            },
            "answer": "b"
        },
        {
            "question": "Continuous Integration (CI) implies:",
            "options": {
                "a": "Deploying to production continuously",
                "b": "Developers merge code changes into a central repo frequently, triggering automated tests",
                "c": "Writing code continuously",
                "d": "Testing done by customers"
            },
            "answer": "b"
        }
    ],
    "Theory of Computation (Automata Theory)": [
        {
            "question": "Regular languages can be exactly recognized by a:",
            "options": {
                "a": "Pushdown Automaton",
                "b": "Finite State Machine",
                "c": "Turing Machine",
                "d": "Linear Bounded Automaton"
            },
            "answer": "b"
        },
        {
            "question": "A Turing Machine is equivalent in computing power to:",
            "options": {
                "a": "Modern digital computers",
                "b": "FSMs",
                "c": "Calculators",
                "d": "Mealy Machines"
            },
            "answer": "a"
        },
        {
            "question": "The Pumping Lemma is primarily used to prove that:",
            "options": {
                "a": "A language is regular",
                "b": "A language is NOT regular",
                "c": "A language is context-sensitive",
                "d": "A language is decidable"
            },
            "answer": "b"
        },
        {
            "question": "Context-free grammars generate:",
            "options": {
                "a": "Regular languages",
                "b": "Context-free languages",
                "c": "Context-sensitive languages",
                "d": "Recursively enumerable languages"
            },
            "answer": "b"
        },
        {
            "question": "Halting problem for Turing machines is:",
            "options": {
                "a": "Decidable",
                "b": "Undecidable",
                "c": "Partially decidable",
                "d": "Computable in O(n)"
            },
            "answer": "b"
        },
        {
            "question": "Chomsky hierarchy type 0 languages correspond to:",
            "options": {
                "a": "Finite State Automata",
                "b": "Pushdown automata",
                "c": "Turing machines",
                "d": "Linear Bounded Automata"
            },
            "answer": "c"
        },
        {
            "question": "In an NFA, a single input character from a state can lead to:",
            "options": {
                "a": "Only one next state",
                "b": "Multiple states",
                "c": "No state at all",
                "d": "Both b and c"
            },
            "answer": "d"
        },
        {
            "question": "A machine that gives an output based on both the current state and the input is called a:",
            "options": {
                "a": "Moore machine",
                "b": "Mealy machine",
                "c": "Turing machine",
                "d": "PDA"
            },
            "answer": "b"
        },
        {
            "question": "To parse a context-free language, we conceptually use a:",
            "options": {
                "a": "Stack",
                "b": "Queue",
                "c": "Tape",
                "d": "Registers"
            },
            "answer": "a"
        },
        {
            "question": "The complement of a Context-Free Language is:",
            "options": {
                "a": "Always Context-Free",
                "b": "Always Regular",
                "c": "Not necessarily Context-Free",
                "d": "Undecidable"
            },
            "answer": "c"
        }
    ]
};