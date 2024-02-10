
function toggleSubsection(subsectionId) {
    const subsection = document.getElementById(subsectionId);

    if (subsection.style.display === 'none') {
        subsection.style.display = 'block';
    } else {
        subsection.style.display = 'none';
    }
}