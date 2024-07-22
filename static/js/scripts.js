const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+[]{}|;:,.<>?ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω∀∂∃∅∇∈∉∋∏∑−∕∗∙√∝∞∠∡∢∧∨∩∪∫∬∭∮∯∰∱∲∳≠≡≤≥⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊕⊗⊥⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱';
const matrixContainer = document.getElementById('matrix');

function createMatrixChar() {
    const char = document.createElement('span');
    char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    char.className = 'matrix-char';
    char.style.left = Math.random() * 100 + 'vw';
    char.style.animationDuration = Math.random() * 9 + 4.5 + 's';
    char.style.fontSize = Math.random() * 10 + 10 + 'px';
    char.style.opacity = Math.random() * 0.5 + 0.5;
    matrixContainer.appendChild(char);
    setTimeout(() => {
        matrixContainer.removeChild(char);
    }, 13500);
}

setInterval(createMatrixChar, 90);

const commandInput = document.getElementById('command-input');
const commandOutput = document.getElementById('command-output');

const commands = {
    'cat about.txt': `
Name: John Doe
Alias: QuantumMind
Specialization: Quantum Cybersecurity & Interdimensional Computing
Location: The Multiverse Nexus
`,
    'ls -l skills/': `
total 3141592
drwxr-xr-x 2 john john 4096 Jun 15 2023 quantum_entanglement_networking
drwxr-xr-x 2 john john 4096 Jun 15 2023 multiverse_data_encryption
drwxr-xr-x 2 john john 4096 Jun 15 2023 temporal_anomaly_detection
drwxr-xr-x 2 john john 4096 Jun 15 2023 quantum_AI_symbiosis
drwxr-xr-x 2 john john 4096 Jun 15 2023 interdimensional_firewall_protocols
`,
    'cat projects.log': `
1. QuantumNet: A network that exists simultaneously across multiple universes
2. Schrödinger's Firewall: Security that's both impenetrable and non-existent until observed
3. Multiverse MySQL: Database management system that queries all possible versions of data
4. QuBit Soul: Transferring human consciousness into stable quantum states
5. TimeLoop Antivirus: Software that prevents viruses before they're even created
`,
    'nmap -p- achievements': `
PORT      STATE SERVICE
42/tcp    open  Answer_to_Life_Universe_and_Everything
1337/tcp  open  Solved_P_vs_NP_Problem
9000/tcp  open  Established_First_Contact_with_Quantum_Aliens
31415/tcp open  Pi_Master_of_Infinite_Decimals
99999/tcp open  Bridged_Classical_and_Quantum_Reality
`,
    'man': `Available commands:
- cat about.txt
- ls -l skills/
- cat projects.log
- nmap -p- achievements
- choose_reality
- man or help
`,
    'help': `Available commands:
- cat about.txt
- ls -l skills/
- cat projects.log
- nmap -p- achievements
- choose_reality
- man or help
`,
    'choose_reality': `
<a href="https://quantum-linkedin.multiverse/johndoe" class="button">LinkedIn Multiverse</a> <a href="https://quantum-youtube.timelines/quantummind" class="button">YouTube Timelines</a> <a href="https://quantum-x.dimensions/johndoe" class="button">X Dimensions</a>
`
};

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim();
        this.value = '';
        
        if (commands.hasOwnProperty(command)) {
            commandOutput.innerHTML += `<span class="prompt">john@quantummind</span>:<span class="path">~</span>$ ${command}\n${commands[command]}`;
        } else if (command === 'clear') {
            commandOutput.innerHTML = '';
        } else {
            commandOutput.innerHTML += `<span class="prompt">john@quantummind</span>:<span class="path">~</span>$ ${command}\nCommand not found: ${command}. Type 'man' or 'help' for available commands.\n`;
        }
        
        commandInput.scrollIntoView();
    }
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    commandInput.focus();
}

window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('enter-button').style.display = 'block';
    }, 3000);  // Simulating a 3-second load time
});

// Focus on command input as soon as possible
document.addEventListener('DOMContentLoaded', (event) => {
    commandInput.focus();
});
