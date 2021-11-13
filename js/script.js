const boutonDetail =document.getElementById('detail-competences');
const listeDetail =document.getElementById('detail-ol');
const tailleEcran =document.getElementsByTagName('html').innerWidth; 
const etatFleche =document.getElementById('fleche-bas');
boutonDetail.addEventListener( 'click', function() {

       let isMenuHidden = listeDetail.classList.contains( 'hidden' );
        if( isMenuHidden ) {
            listeDetail.classList.remove( 'hidden' );
            boutonDetail.classList.add( 'close' );
            etatFleche.classList.add( 'close' );
        }
        else {
            listeDetail.classList.add( 'hidden' );
        
            boutonDetail.classList.remove( 'close' );
            etatFleche.classList.remove( 'close' );
        }
    });