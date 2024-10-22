import React from 'react';
import Kep1 from '../img/kep01.jpg'
import Kep2 from '../img/kep02.jpg'
import Kep3 from '../img/kep03.jpg'
import Kep4 from '../img/kep04.jpg'
import Kep5 from '../img/kep05.jpg'
import Kep6 from '../img/kep06.jpg'
import Kep7 from '../img/kep07.jpg'
import Kep8 from '../img/kep08.jpg'
import './App.css';

function App() {
  return (
    <div>
        <section id="home">
            <h2>Élete</h2>

            Sir John Young Stewart (Milton, West Dunbartonshire, Skócia, 1939. június 11. –) autóversenyző, háromszoros Formula–1-es világbajnok, tévékommentátor, Ford-szaktanácsadó. John Surtees 2017. március 10-én bekövetkezett halála óta a legidősebb élő Formula 1-es világbajnok.
            1965-ben debütált a Formula–1-be. Olyan versenyzők voltak ellenfelei a szezonban, mint Jack Brabham, Graham Hill, Jim Clark és Bruce McLaren. Második versenyén, Monacóban harmadik lett, emellett három második helyet is szerzett, az olasz nagydíjat pedig megnyerte. BRM-es csapattársa Graham Hill volt. Első szezonjában harmadik lett a világbajnokságban. A következő évre a motorok hengerűrtartalmának 3 liternek kellett lennie, a BRM csapat pedig jelentősen visszaesett, és ezentúl a Ford-Cosworth motorok domináltak. 1968-ra átszerződött a Ken Tyrrell és Jean-Luc Lagardère által alapított Matra csapathoz, melyet már Ford motor hajtott. Itt első évében második lett a Lotusos Hill mögött. A következő évben, óriási előnnyel már világbajnok lett.
            Stewart pályafutása során 99 Nagydíjon vett részt, ebből 27-et megnyert, és három világbajnoki címet szerzett meg. Futamgyőzelmeinek rekordját csak 1987-ben tudta megdönteni Alain Prost.
        </section>
        <section id="palyafutasa">
            <h2>Pályafutása</h2>
            <table>
              <tr>
                <th>Kategória</th>
                <td>Formula–1-es világbajnokság</td>
              </tr>
              <tr>
                <th>Aktív évei</th>
                <td>1965 – 1973</td>
              </tr>
              <tr>
                <th colSpan={2}>Csapatai: BRM, Matra, Tyrrell</th>
              </tr>
              <tr>
                <th>Nagydíjak száma</th>
                <td>100 (99 rajt)</td>
              </tr>
              <tr>
                <th>Világbajnoki címek</th>
                <td>3 (1969, 1971, 1973)</td>
              </tr>
              <tr>
                <th>Győzelmek</th>
                <td>27</td>
              </tr>
              <tr>
                <th>Dobogós helyezések</th>
                <td>43</td>
              </tr>
            </table>
        </section>
        <section id="kepek">
            <h2>Képek</h2>
            <div>
                <img className = "img-thumbnail"src={Kep1} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep2} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep3} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep4} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep5} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep6} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep7} alt="kep"/>
            </div>
            <div>
                <img className = "img-thumbnail"src={Kep8} alt="kep"/>
            </div>
        </section>
        <script src='../js/bootstrap.min.js'></script>
        <script src='../js/jquery.min.js'></script>
        <script src='../js/popper.min.js'></script>
    </div>
  );
}

export default App;
