import React from "react";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import seeds from "../componenets/Images/seeds.jpg";

const Seeds = () => {
  return (
    <div>
        <Navbar />

        <div className="container-fluid bg-light p-5">
        <div className="container">
            <div className="row contact-section">
                <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12">
                    <h2 className="mb-4 display-6 lh-1 fw-bold">
                    The Modern Farmer Guide To Buying Seeds
                    </h2>
                    <p className="lead">
                    If 2020 taught us anything when it comes to gardening, it’s that you should buy your seeds early. Last spring saw seed companies inundated with unprecedented demand, as gardening grew in popularity as a pandemic pastime. 

While seed sellers are already starting to get busy this year, time is still on your side. If you plan ahead, you can get the seeds you want and start your garden as soon as the winter frost subsides. 

Not exactly sure where to begin? Here’s our guide to buying seeds for the upcoming growing season. 
                    </p>
                    {/* <a className="btn btn-info btn-lg px-4 mt-2 mb-5" href="./add-oxygen-supplier-contact-page.html" role="button">
                        Add a Oxygen Supplier Contact
                    </a> */}
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                    <img src={seeds}className="contact-section-image shadow-lg rounded img-fluid mx-auto d-none d-sm-none d-md-block d-lg-block d-xl-block" alt="Add Details about Plasma Donor" width="500" height="500" />
                </div>
            </div>
        </div>
    </div>

    <div className="container" style={{textAlign: 'left'}}>
        <h1>Take Inventory and Make a List </h1>
        <p>You wouldn’t go to the grocery store without knowing what you already have and what you need. It’s the same thing with seeds for your garden. And while it might be tempting to focus on what you want to put in the ground in the spring, it’s important to think ahead about cool weather crops for the fall, such as greens and root vegetables. Check out our list of seven crops you can plant for a fall harvest, if you’re in need of some inspiration. </p>

        <h1>Know Your Environment </h1>
        <p>Make sure you know what your growing conditions are like. Does your garden have a space for full sun or is it mostly in a shaded space? This will determine what you put on your list. For example, vegetables such as tomatoes, peas and cucumbers thrive in full sun while leafy greens can handle shadier spots. Lots of root vegetables can grow with at least a half a day of sun. 

It’s also important to know your hardiness zone. If you’re not sure what it is, go to the USDA site and enter your zip code to find out. Descriptions on seed packets will sometimes include the ideal hardiness zone. If you opt to purchase your seeds at your local garden center, what you’ll find is a selection that’s appropriate for your region. </p>

<h1>Understanding Seed Varieties  </h1>
<p>If you’re a new gardener, sometimes, the terminology for types of seeds can be overwhelming. Here’s a breakdown.</p>
<p><strong>Open pollination:</strong> Open-pollination seeds come from varieties that are pollinated naturally with wind or insects. These are seeds that can produce plants that look and taste like their parent plant, meaning that you can save seeds from these varieties year after year. One benefit of using open-pollination seeds is that they can slowly adapt to growing conditions and climate over the years. </p>
<p></p>
<p><strong>Hybrid (H1):</strong> Hybrid seeds are the product of professional plant breeders. They are made using controlled pollination methods (as opposed to open pollination) by crossing two varieties with favorable characteristics such as disease resistance, higher yields or improved flavor. Hybrid breeds might have characteristics that allow your plants to thrive, but you can’t save these seeds and grow them again because they will produce plants with traits different from their parent.</p>
<p><strong>Heirloom:</strong> Heirloom varieties are older plants that have survived for more than 40-50 years. These seeds have been saved to preserve genetic diversity and cultural traditions. Heirloom seeds have either a unique appearance, taste or resilient traits that have led to their endurance.</p>
<p><strong>Organic:</strong> This is a USDA designation for seeds of plants that were grown organically without synthetic fertilizer, pesticides or fungicides. Although these seeds are usually more expensive, if you plan on gardening using organic practices, you might produce better yields. </p>
<p><strong>GMO: </strong>These are plants that have been altered in a lab using gene modification. This tends to involve using genetic traits from another species to add desired characteristics. There are very few GMO seeds available for home gardeners, but it’s still a good term to understand in case you come across some. </p>

<h1>Know Your Sources </h1>
<p>Make sure that you are purchasing your seeds from a trusted, well-known source. If you’re a new gardener and you’re looking online, sometimes, it’s hard to tell. 

Here’s a list of common places where you can replenish your seed stock online. A majority of these stores also have print and electronic catalogs for the 2021 growing season. </p>
<p><strong>Clear Creek Seeds:</strong> This is a family-owned business, based in Oklahoma, that started in 2010. Its speciality is heirloom, non-GMO, open-pollinated vegetable and herb seeds. </p>
<p><strong>Fedco Seeds:</strong> Fedco is a co-operative seed company, based in Maine. It has existed since 1978 and is known to be the best source for cold-hardy selections, specifically the northeastern climate. In addition to seeds, it also sells bulbs and trees. About 30 percent of the seeds in its stock are certified organic. </p>
<p><strong>Seed Savers Exchange:</strong> Seed Savers Exchange has existed since 1975. It is a nonprofit organization and one of the largest non-governmental seed banks in the United States. Seed Savers Exchange is based in Iowa and has a collection of more than 20,000 different varieties of heirloom and open-pollinated plants from which to choose. </p>
<p><strong>Seeds of Change:</strong>  This is an organic seed and food company that was founded in 1989. It has a wide range of crops marketed in categories such as container friendly, annuals, biennials, hardy varieties, full-sun crops, partial-sun crops, edible flowers and heirlooms. </p>
<p><strong>High Mowing Organics:</strong> High Mowing Organics began in 1996. Today, the organic seed company sells more than 600 types of heirloom, open-pollinated and hybrid seeds. This includes vegetables, herbs and flowers. </p>
<p><strong>Sow True Seed: </strong>This North Carolina seed source has a collection of more than 500 types of GMO-free vegetable, herb and flower seeds. This includes heirloom, open-pollinated, organic plants and what it calls “small farmer grown” varieties. The company also has a number of growing guides and a page to help you determine what you should plant each month, according to your USDA hardiness zone. </p>
<p><strong>Renee’s Garden:</strong> Renee’s Garden seeds offer heirloom, certified organic and specialty crops, specifically marketed for the home gardener. The seeds are selected from a number of growers around the world. </p>

<h1>Use a Critical Eye </h1>
<p>Check the date on the packaging or in the online description to make sure the seeds you’re buying are for this year. While seeds can last for many years (with the exception of onions, leeks and parsnips), it’s important to know that their ability to germinate declines as they get older. 

It’s also important to be mindful of shipping fees. This can increase the final cost of your bill substantially, doubling or tripling it in some cases. Another small detail that new gardeners often miss is the number of seeds that are included in each package. So be aware of what you’re buying, as you might end up with way too much seed. 

For more information on how to read your seed packets, Penn State Extension has this guide.  </p>
    </div>
     
        
       

       <Footer /> 

    </div>
      
  
  );
};

export default Seeds;
