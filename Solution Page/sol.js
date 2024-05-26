document.getElementById('toggleButton').addEventListener('click', function() {
    var green_infra = document.getElementById('green_infra');
    if (green_infra.classList.contains('hidden')) {
        green_infra.classList.remove('hidden');
    } else {
        green_infra.classList.add('hidden');
    }
});
