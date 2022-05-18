import * as S from './style';

function Footer() {
    return (
        <div>
            <S.Footer>
                <S.Table>
                    <caption>Created by</caption>
                    <thead>
                    <tr>
                        <th>FE</th>
                        <th>BE</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Groovy</td>
                        <td>Marine</td>
                    </tr>
                    <tr>
                        <td>Rulu</td>
                    </tr>
                    <tr>
                        <td>Dubu</td>
                    </tr>
                    </tbody>
                </S.Table>
            </S.Footer>
        </div>
    );
}

export default Footer;