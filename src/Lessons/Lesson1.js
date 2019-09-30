import React from 'react';
import data from '../Data/L1Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col, Table} from 'react-bootstrap';

// Other
import '../App.scss';

function L1() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">Vakf</h2>
            <h4 className="text-center">stajanje prilikom učenja</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            Prilikom učenja Kur'ana, učač može stati u sljedećim situacijama: ako je kraj ajeta, ako postoji znak za stajanje i kada mu ponestane daha. To čini na sljedeći način:
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>1.</strong>	Kada riječ na kojoj staje završava kratkim vokalom E  ــــــَــــــ , I   ـــــــِـــــ, U  ــــــُــــــ ili tenvinom IN ـــــٍــــــ ,  UN  ــــــٌــــــ, stat će kao da je na riječi sukun  ــــــْــــــ, npr.:
          </Col>
        </Row>
        
        <Row>
          <Col>
          { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>2.</strong>	Kada riječ završava tenvinom EN  ــــــًــــــ, stat će kao da je dugo  A ـــــَــــــ ا , npr.:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row2') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>3.</strong>	Kada riječ završava dugim vokalom A ــــــَــــــ ا , dugim vokalom Iــــــِـــــ ى  ili dugim vokalom Uــــــُـــــ و, stat će bez ikakve promjene, npr.:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row3') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>4.</strong>	Kada riječ završava okruglim T (ة/ـة), stat će kao da je napisano slovo H (ه), bez obzira koji je vokal ili tenvin napisan na njemu, npr.:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row4') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
          <h3>Pregled u tabeli:</h3>
          <Table className="tabela-opis text-center" bordered hover responsive>
            <thead className="text-danger text-uppercase">
              <tr>
                <th>Kada riječ završava na</th>
                <th>Stajemo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                E ــــــَــــــ , I  ـــــــِـــــ, U ــــــُــــــ , IN ـــــٍــــــ , UN  ــــــٌـــــ
                </td>
                <td>
                kao da je sukun  ــــــْــــــ
                </td>
              </tr>
              <tr>
                <td>
                EN  ــــــًــــــ
                </td>
                <td>
                kao da je dugo A ــــــَــــــ ا
                </td>
              </tr>
              <tr>
                <td>
                dugo A ـــــَـــــ ا , dugo Iــــــِــــ ى  , dugo Uـــــُـــــ و  	bez ikakve promjene
                </td>
                <td>
                bez ikakve promjene
                </td>
              </tr>
              <tr>
                <td>
                okruglo T (ة/ـة)	kao da je H (ه)
                </td>
                <td>
                kao da je H (ه)
                </td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
          <h3>Znakovi za stajanje:</h3>
          <p>Iznad nekih riječi u Kur'anu nalaze se <strong>znakovi</strong> koji označavaju da li se na toj riječi mora stati ili se ne smije, da li je bolje stati ili je bolje preći. Ti znakovi su:</p>
          <Table className="tabela-opis text-center" bordered hover responsive>
            <thead className="text-uppercase">
              <tr>
                <th className="text-danger">Mora stati</th>
                <th>Bolje stati</th>
                <th>Boje preći</th>
                <th className="text-danger">Ne smije se stati</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                م
                </td>
                <td>
                قف ؛ قلي ؛ ج ؛ ط
                </td>
                <td>
                صلي ؛ ق ؛ ص ؛ ز
                </td>
                <td>
                لا
                </td>
              </tr>
            </tbody>
          </Table>

          <Table className="tabela-opis text-center" bordered hover responsive>
            <thead className="text-uppercase">
              <tr>
                <th>Sekta</th>
                <th>Tri tačkice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                سكتة ؛س
                <br/>Pauzira se bez prekidanja daha.
                </td>
                <td>
                رَيْبَۚۛ ف۪يهِۚۛ   
                <br/>Ukoliko se pauzira na prvom znaku, onda je na drugom obavezno preći i obrnuto.
                </td>
              </tr>
            </tbody>
          </Table>
          <p>
            <strong>NAPOMENA</strong>: Znak قصر ispod riječi je znak da se vokal ispod kojeg se nalazi uči kratko, a مد je znak da se vokal uči dugo.
          </p>
          </Col>
        </Row>

        <h2 className="text-center">Vježbe</h2>
        <hr/>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'red19') }
            { VjezbeRow(data, 'vjezba', 'red18') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            ۞
            { VjezbeRow(data, 'vjezba', 'red21') }
            ۞
            { VjezbeRow(data, 'vjezba', 'red20') }
          </Col>
        </Row>
        <Row className="text-center"> 
          <Col>
            ۞
            { VjezbeRow(data, 'vjezba', 'red24') }
            { VjezbeRow(data, 'vjezba', 'red23') }
            ۞
            { VjezbeRow(data, 'vjezba', 'red22') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            ۞
            { VjezbeRow(data, 'vjezba', 'red26') }
            { VjezbeRow(data, 'vjezba', 'red25') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            ۞
            { VjezbeRow(data, 'vjezba', 'red27') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            ۞
            { VjezbeRow(data, 'vjezba', 'red29') }
            ۞
            { VjezbeRow(data, 'vjezba', 'red28') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            ۞
            { VjezbeRow(data, 'vjezba', 'red31') }
            ۞
            { VjezbeRow(data, 'vjezba', 'red30') }
          </Col>
        </Row>

        <hr/>

        NE POKLAPA SE WORD SA SLIKAMA

        <Footer prev="/" next="/lekcija2" />

        </React.Fragment>
    );
  }

  export default L1;