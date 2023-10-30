

export const getList = (id) => {
  const list = [
    {
      text: [
        "On Voyage Repairs.",
        "Main engine overhauls at Anchorage.",
        "Auxiliary engine crankshaft renewal.",
        "Steering gear fault finding.",
        "Turbocharger service and overhaul.",
        "Installation and commissioning of hydraulic power pack.",
        "Boiler repair and overhaul.",
        "Alongside/Safe Berth Repairs.",
        "Anchorage Repairs.",
        "Complete or Partial Engine Overhaul.",
        "Routine maintenance, troubleshooting and repair of engines.",
        "Technical Consulting Service.",
        "Service of fuel systems of all 2 and 4 Stroke Engine Systems.",
        "Reconditioning of Fuel Pumps (Single / Inline).",
        "Reconditioning of Plungers and Barrels.",
        "Reconditioning of Fuel Valves and Injectors.",
        "Repair and overhaul Main Engine medium and high speed diesel engines.",
        "Repair and overhaul of hydraulic clutches and transmission gears.",
        "Repair and overhaul of engine room and deck machineries, pumps, air compressors, windlass.",
        "Workshop fabrication, reconditioning, restoration of machinery components to maker’s standard.",
        "Repairs, modification and installation of electrical equipment.",
        "Repair and rewinding of electric motors and alternators.",
        "Renewal and fabrication of engine room deck and double bottom tanks pipes & fittings.",
        "Tank cleaning.",
        "We provide piping services such as pipeline structure fabrication and installation for pipes system in Engine, Pump rooms.",
        "We offer wide range of services for afloat steel repairs and fabrication.",
      ],
    },
    {
      text: [
        "Supply new Shipbuilding and Conversions of Ship Air-Condition/Refrigeration.",
        <span><b>Supply all kinds of Air </b> -Condition/Refrigeration Compressor(on exchange basis).</span>,
        <span><b>Supply all kinds of Air </b> -Condition/Refrigeration Compressor Replacement Spare Parts.</span>,
        <span><b>Supply Marine Air</b>-Conditioning Wall-Split Unit/Portable Spot Cooler.</span>,
        <span><b>Repair all kinds of Air</b>-Condition/Refrigeration Compressor.</span>,
        "Rewind all kinds of Motors AC/DC.",
        "Fabrication of all kinds of Evaporator Coil, Condensers, Chill Water Coil Steam Heating Coils, Chiller Coils, Oil Cooling Coilsand Retubing etc.",
        "Anchorage repair and Voyage Repair.",
        "We can supply compressor on exchange basis.",
        "24hr hotline for technical troubleshooting and related spares parts procurement.",
      ],
    },
    {
      text: [
        <span><b>Provisions</b> - Such as eatables: Vegetable, Meat, Dairy products, etc.</span>,
        <b>Galley utensils.</b>,
        <span><b> Rope </b> - Steel wire, Mooring rope, Wire rope, etc.</span>,
        <span><b>Marine Paint & Equipments</b> - Clearing gun, Air duster, Paint spray guns, All marine paint, etc.</span>,
        <span><b>Safety equipments & Protective gear</b> - Fire Extinguisher, Gas Detectors, Life Jackets, Safety Mask, Smoke Detectors, SOLAS Publication, Liferaft, Lifeboat & accessories, etc.</span>,
        <span><b>Nautical equipments</b> - Charts, Marine radio, Navigation instruments, Merchant flags, etc.</span>,
        <span><b>Medicine</b> - Equipment, Medical chests, Medical supplies, etc.</span>,
        <span><b>Stationery</b> - Calculators, Computer & Accessories, Stamps, Files, Paper, etc.</span>,
        <span><b>Hardware</b> - Racks, Holders, Locks, Cabinet hardware, Bathroom hardware, etc.</span>,
        <span><b>Hand, Cutting, Electric & Mechanical tools </b>- Ladders, Cutters, Drillers, Cables, Lamps, Battery, Cargo lights, etc.</span>,
        <span><b>Valves & Pipes </b>- Ball, Butterfly, Gate, Check, Globe valves, Aluminium, Steel, PVC pipes, etc.</span>,
        <span><b>Welding equipment</b> - Electrodes, Rods, Gas Cylinders, Hoses, Gauges, etc.</span>,
      ],
    },
    {
      text: [
        "Our team provides manning & crew management, offering our customers high quality, cost-efficient, and personalized crewing services. These services support and encourage safe and efficient ship operation while promoting clients’ competitiveness.",
        "We provide a quality service where our customers have total confidence in our ability to manage the human resources on their behalf. This gives them the freedom to concentrate on other aspects of ship operation, management, and ownership.",
        "We offer various crew management combinations, tailored specifically to your needs.",
        "We can either provide select crew members or supply a full crew complement. When supplying a full crew, we take full responsibility for them. Our crew roster includes highly-qualified, experienced members for all types of vessels, from Skippers to assistants.",
        "Despite our extensive crew offerings, we maintain the benefits of a highly experienced and well-trained crew. Upon request, we can manage responsibilities such as visas, medicals, crew travel, and payroll.",
        "We are highly flexible, adjusting to provide whatever level of support you require.",
      ],
    },
    {
      text: [
        <span><b>For Purchasing:</b>
        <p className="pl-4 ml-4"> -  Spares usage and inventory. </p>
        <p className="pl-4 ml-4"> -  Spares future prediction. </p>
        <p className="pl-4 ml-4"> -  Stores supply and inventory. </p>
        <p className="pl-4 ml-4"> -  Automatic requisition generator. </p> </span>,

        <span><b>For Technical:</b>
        <p className="pl-2 ml-2"> -  Docking and repair planning.</p>
        <p className="pl-2 ml-2"> -  Survey status & job reports.</p>
        <p className="pl-2 ml-2"> -  Integrated maintenance and class survey.</p>
        <p className="pl-2 ml-2"> -  Condition based maintenance.</p>
        <p className="pl-2 ml-2"> -  Alert and notifications.</p></span>,

        <span><b>For Finance:</b>
        <p className="pl-2 ml-2"> -  Budget control.</p>
        <p className="pl-2 ml-2"> -  History of supply.</p>
        <p className="pl-2 ml-2"> -  Invoice connecting with the supply.</p>
        <p className="pl-2 ml-2"> -  Overdue alert.</p></span>,

        <span><b>For Vessel:</b>
        <p className="pl-2 ml-2"> -  Spares requisition.</p>
        <p className="pl-2 ml-2"> -  Planning.</p>
        <p className="pl-2 ml-2"> -  Rescheduling.</p>
        <p className="pl-2 ml-2"> -  Follow up for stores/ repairs/ spares.</p>
        <p className="pl-2 ml-2"> -  Reporting to Shore based office.</p></span>,

        "Our software allows all labels, messages, and instructions to be configured as per the client's request. Additional languages can be added to aid the workflow and minimize human activities across all departments, thereby improving efficiency.",
      ],
    },
  ];
  return list[id - 1];
};

export const servicesBodyText = `We SMES serve the Marine Industry in a most efficient and cost
effective way. Our team comprises of Marine Engineers with a highly
skilled work force with collective experience of more than 25 year.
Our workshop is well equipped with all cutting edge technology. We
carry out various jobs like overhauls and repair for Generators,
Pumps, Purifiers, Compressors and Turbocharge in our workshop and on
board overhaul for Main Engines. We provide excellent Quality Service
to ShipOwners, ShipManagers and ShipYards to cater all there
operational needs. We have a total transparency based feedback system
with our customer to assist us no continually innovate. We can provide
repairs such as afloat ship repair, Workshop repair, Piping works,
Boiler cleaning, new machinery installation, Fabrication. Hull repairs
etc. We can provide services such as Marine Surveying, Pre Purchase
Survey, Consultancy, Bunker surveys, De-slopping, De-mucking etc.
Through our experience in the Marine industry we have short listed and
implemented into our company structure and policy. With our experience
& knowledge in service sector we are poised to be a customer oriented
firm.`;