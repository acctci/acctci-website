import { Helmet } from 'react-helmet'

export const Head = () => {
  return (
    <Helmet>
            <title>Gallery</title>
            <meta charSet="utf-8" />
            <meta 
               name='description'
               content={`
                     The African Caribbean Chamber of Trade Commerce and Industry is the
                      umbrella organization for various affiliate member Chamber of Commerce
                       Trade and Industries within Africa and Caribbean. The chambers champions 
                       the course in several sectors such as Education, Tourism, Agriculture,
                        Construction, Financial, Energy, Healthcare, Transportation and Business 
                        Services through its advocacy role and influence/lobby public policies 
                        that promote free enterprise on behalf of our member partners and 
                        associate.
                        The African Caribbean Chamber of Trade Commerce and Industry reorganizing
                         the role of the African Union as the umbrella organization for Africa 
                         wishes to partner in several areas in the advancement of the promotion
                          of trade. At present the trade volume with Africa and the Caribbean 
                          stands at 512 million(usd) and it is our belief that with direct private
                           sector involvement driving the process working in collaboration with 
                           policy maker such as the African union we can have the figure over 1.2
                            billion over the period of three years .to achieve this first there
                             must be direct engagement with the private sectors members in the 
                             Africa and the Caribbean to this end the African Caribbean Chamber 
                             of trade, commerce and industry is organizing the first African 
                             Caribbean Chamber trade summit in November of 2022 to be held in
                              Abuja Nigeria and we invite the African Union office of trade to 
                              come on board with its expertise and technical man power to assist
                               in the process.
                `}
             />
        </Helmet>
  )
}
