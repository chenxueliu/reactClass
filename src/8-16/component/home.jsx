import React from 'react'
import { Toptitle, MainTitle } from './homestyle'
import { connect } from 'react-redux'
const Home = (props) => {
    console.log(props)
    const { pageContent, languages, lang ,onSelectLang} = props
    return <div>
        <Toptitle>
            <p>{pageContent.topTitle}</p>
            <select value={lang} onChange={onSelectLang}>
                {
                    languages.map((item) => {
                        return <option value={item.id} key={item.id}>{item.label}</option>
                    })
                }
            </select>
        </Toptitle>
        <MainTitle>
            <p>{pageContent.mainTitle}</p>
        </MainTitle>
    </div>
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectLang({target}) {
            dispatch({
                type: 'onSelectLang',
                value: target.value
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)