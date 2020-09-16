var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

document.getElementById('tbody').addEventListener("mouseover",(e)=>{

    let cellIndex= e.target.cellIndex;
    let teerki = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let tedes = document.getElementsByTagName('td')

    for(let i = 0; i< document.getElementsByTagName('td').length; i++){
      document.getElementsByTagName('td')[i].style.backgroundColor="transparent";

    }
    for(let i=0; i<teerki.length; i++){
      teerki[i].getElementsByTagName('td')[cellIndex].style.backgroundColor="rgba(0,0,255,0.2)";
    }
    document.getElementsByTagName('thead')
  })
