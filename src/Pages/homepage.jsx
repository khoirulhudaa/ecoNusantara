import AOS from 'aos';
import 'aos/dist/aos.css';
import { saveAs } from 'file-saver';
import { icon } from 'leaflet';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaArrowRight, FaFileExport, FaGripLines, FaIcons, FaMicrophone, FaPlaneDeparture, FaTimes, FaVectorSquare, FaWhatsapp } from 'react-icons/fa';
import { MapContainer, Marker, Polygon, Polyline, Popup, TileLayer, Tooltip, useMapEvent } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BLueFlower, FoodBg, Jawa, Kalimantan, Papua, People1, People2, RempahBg, Sumatera } from '../Assets';
import Api from '../Components/api';
import Articles from '../Components/articles';
import CardSkeleton from '../Components/cardSkeleton';
import CardSkeletonArticle from '../Components/cardSkeletonArticle';
import CardSkeletonContact from '../Components/cardSkeletonContact';
import CardSkeletonCulinary from '../Components/cardSkeletonCulinary';
import CardSkeletonEvent from '../Components/cardSkeletonEvent';
import CardSkeletonType from '../Components/cardSkeletonType';
import Footer from '../Components/footer';
import Navbar from '../Components/navbar';
import JenisKekayaanAlam from '../Data/jenisKekayaanAlam';
import Kuliner from '../Data/kuliner';
import Rempah from '../Data/rempah';
import Wisata from '../Data/wisata.json';
import API from '../Services/service';
import { clearInformation, getDetail, getEvent, getInformation } from '../Store/informationSlice';

const Homepage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(clearInformation())

    const [allTour, setAllTour] = useState([])
    const [allContact, setAllContact] = useState([])
    const [allCulinary, setAllCulinary] = useState([])
    const [allSpice, setAllSpice] = useState([])
    const [allEvent, setAllEvent] = useState([])
    const [center] = useState([-1.5555, 117.5525]);
    const [zoom] = useState(5);

    const [searchLocation, setSearchLocation] = useState('')
    const [searchLocationSpice, setSearchLocationSpice] = useState('')
    const [searchLocationCulinary, setSearchLocationCulinary] = useState('')
    const [activeMic, setActiveMic] = useState(false)
    const [activeMicSpice, setActiveMicSpice] = useState(false)
    const [activeMicCulinary, setActiveMicCulinary] = useState(false)
    const [activeLineMarker, setActiveLineMarker] = useState(false)
    const [activeLineMarkerSpice, setActiveLineMarkerSpice] = useState(false)
    const [activeLineMarkerCulinary, setActiveLineMarkerCulinary] = useState(false)
    const [activeArea, setActiveArea] = useState(false)
    const [activeAreaSpice, setActiveAreaSpice] = useState(false)
    const [activeAreaCulinary, setActiveAreaCulinary] = useState(false)
    const [lineMarkers, setLineMarkers] = useState(null);
    const [lineMarkersSpice, setLineMarkersSpice] = useState(null);
    const [lineMarkersCulinary, setLineMarkersCulinary] = useState(null);
    const [selectIcon, setSelectIcon] = useState('')
    const [activeMenuIcon, setActieMenuIcon] = useState(false)
    const [activeClick] = useState(false)
    const [activeRange, setActiveRange] = useState(false);
    const [startPoint, setStartPoint] = useState(null);
    const [endPoint, setEndPoint] = useState(null);
    const [startPointPoly, setStartPointPoly] = useState(null);
    const [endPointPoly, setEndPointPoly] = useState(null);
    const [unit, setUnit] = useState('kilometer');
    const [currentPosition, setCurrentPosition] = useState(null);
    const [currentPositionSpice, setCurrentPositionSpice] = useState(null);
    const [currentPositionCulinary, setCurrentPositionCulinary] = useState(null);
    const [activeRangeCustomIcon, setActiveRangeCustomIcon] = useState(false);
    const [loading, setLoading] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
   
    useEffect(() => {
        AOS.init();
        (async () => {
            setLoading(true)
            const resultTour = await API.getAllTour()
            setAllTour(resultTour.data.data)
            
            const resultContact = await API.getAllContact()
            setAllContact(resultContact.data.data)
            
            const resultCulinary = await API.getAllCulinary()
            setAllCulinary(resultCulinary.data.data)
            
            const resultSpice = await API.getAllSpice()
            setAllSpice(resultSpice.data.data)
            
            const resultEvent = await API.getEvet()
            setAllEvent(resultEvent.data.data)
            setLoading(false)
        })()
    }, [])


	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

    const isDesktop = screenWidth >= 420;

    const recognition = new window.webkitSpeechRecognition();
    const recognitionSpice = new window.webkitSpeechRecognition();
    const recognitionCulinary = new window.webkitSpeechRecognition();

    recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        setSearchLocationSpice('')
        setSearchLocationCulinary('')
        setSearchLocation(text)
    };
    
    recognitionSpice.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        setSearchLocation('')
        setSearchLocationCulinary('')
        setSearchLocationSpice(text)
    };
    
    recognitionCulinary.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        setSearchLocation('')
        setSearchLocationSpice('')
        setSearchLocationCulinary(text)
    };
  
    const startListening = () => {
        recognition.start();
    };
  
    const stopListening = () => {
        recognition.stop();
    };
   
    const startListeningSpice = () => {
        recognitionSpice.start();
    };
  
    const stopListeningSpice = () => {
        recognitionSpice.stop();
    };

    const startListeningCulinary = () => {
        recognitionCulinary.start();
    };
  
    const stopListeningCulinary = () => {
        recognitionCulinary.stop();
    };

    const MapEventsHandler = () => {
        if(activeClick) {
          useMapEvent('click', (value) => {
            const data = [
              value?.latlng?.lat,
              value?.latlng?.lng
            ]
            setCoordinates((prev) => [...prev, data])
          })
        }
        useMapEvent('moveend', (event) => {
          const map = event.target;
          const center = map.getCenter(); 
          setCurrentPosition([center.lat, center.lng]); 
        });
    
        return null;
    }

    const MapEventsHandlerSpice = () => {
        if(activeClick) {
          useMapEvent('click', (value) => {
            const data = [
              value?.latlng?.lat,
              value?.latlng?.lng
            ]
            setCoordinatesSpice((prev) => [...prev, data])
          })
        }
        useMapEvent('moveend', (event) => {
          const map = event.target;
          const center = map.getCenter(); 
          setCurrentPositionSpice([center.lat, center.lng]); 
        });
    
        return null;
    }

    const MapEventsHandlerCulinary = () => {
        if(activeClick) {
          useMapEvent('click', (value) => {
            const data = [
              value?.latlng?.lat,
              value?.latlng?.lng
            ]
            setCoordinatesCulinary((prev) => [...prev, data])
          })
        }
        useMapEvent('moveend', (event) => {
          const map = event.target;
          const center = map.getCenter(); 
          setCurrentPositionCulinary([center.lat, center.lng]); 
        });
    
        return null;
    }

    const myIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<p style="font-size:  26px;">${selectIcon}</p>`, 
        iconAnchor: [10,  25],
      });
    
      const defaultIcon = icon({
        iconUrl: markerIconUrl,
        shadowUrl: markerShadowUrl,
      });

    useEffect(() => {
        const linesDataMarker = [
          ...allTour.map((marker) => [parseFloat(marker.lat), parseFloat(marker.long)]),
          [parseFloat(allTour[0]?.lat), parseFloat(allTour[0]?.long)]
        ];
    
        setLineMarkers(linesDataMarker);

        const linesDataMarkerSpice = [
          ...allSpice.map((marker) => [parseFloat(marker.lat), parseFloat(marker.long)]),
          [parseFloat(allSpice[0]?.lat), parseFloat(allSpice[0]?.long)]
        ];
    
        setLineMarkersSpice(linesDataMarkerSpice);

        const linesDataMarkerCulinary = [
          ...allCulinary.map((marker) => [parseFloat(marker.lat), parseFloat(marker.long)]),
          [parseFloat(allCulinary[0]?.lat), parseFloat(allCulinary[0]?.long)]
        ];
    
        setLineMarkersCulinary(linesDataMarkerCulinary);
     }, [allTour, allSpice, allCulinary]);

    const checkForDisaster = (conditions) => {
        for (let i = 0; i < conditions?.length; i++) {
        if (conditions[i].label === "Rawan bencana") {
            return true;
        }
        }
        return false; 
    }

    const circleCoordinates = (centerLat, centerLong, radiusInKm) => {
        const numPoints =  100; // Number of points along the circle
        const radiusInRadians = radiusInKm /  6371; // Earth's average radius in km
        let angleStep =  2 * Math.PI / numPoints;
        let coordinates = [];
      
        for (let i =  0; i <= numPoints; i++) {
          let angle = i * angleStep;
          let dx = radiusInRadians * Math.cos(angle);
          let dy = radiusInRadians * Math.sin(angle);
          let newLong = centerLong + (dx * (180 / Math.PI));
          let newLat = centerLat + (dy * (180 / Math.PI));
          coordinates.push([newLat, newLong]);
        }
      
        return coordinates;
    };

    const areas = allTour?.map((marker) => {
        const lat = parseFloat(marker.lat);
        const long = parseFloat(marker.long);
        return {
          name: marker.name_location,
          condition: marker.condition ?? '',
          coordinates: circleCoordinates(lat, long, 35)
        };
    });

    const areasSpice = allSpice?.map((marker) => {
        const lat = parseFloat(marker.lat);
        const long = parseFloat(marker.long);
        return {
          name_spice: marker.name_spice,
          condition: marker.condition ?? '',
          coordinates: circleCoordinates(lat, long, 35)
        };
    });

    const areasCulinary = allCulinary?.map((marker) => {
        const lat = parseFloat(marker.lat);
        const long = parseFloat(marker.long);
        return {
          name_culinary: marker.name_culinary,
          coordinates: circleCoordinates(lat, long, 35)
        };
    });

    const MultipleMarkers = () => {
    return (
        <>
            {allTour
            ?.filter(data => {
                if(searchLocation !== '') {
                    return (data?.name_location).toLowerCase().includes(searchLocation.toLowerCase())
                }
                return true
            })
            ?.map((coord, index) => (
             <Marker 
                key={index} 
                position={[coord?.lat, coord?.long]} 
                icon={selectIcon !== '' ? myIcon : defaultIcon}
             >
                <Popup>
                <div className='flex flex-col'>
                    <div className='relative overflow-hidden mb-2 rounded-[12px] w-full h-[160px]'>
                    <img src={coord?.thumbnail} onClick={() => {window.location.href = coord?.thumbnail, '__blank' }} alt="thumbnail" className='cursor-pointer hover:scale-[1.2] duration-300 hover:brightness-[70%]' />
                    </div>
                    <small className='text-[12px] rounded-[8px] hover:brightness-[90%] duration-200 py-3 mb-4 mt-2 bg-blue-600 text-white text-center' onClick={() => {window.location.href = coord?.link, '__blank' }}>Lihat di google map</small>
                    <div className='w-[300px] flex flex-wrap items-center'>
                    {
                        coord.condition && coord.condition.slice(0, 3)
                        .map((con, index) => (
                        <div className='w-max rounded-full bg-white border border-slate-300 h-[35px] mb-2 px-3 flex items-center'>
                            <p key={index}>{con.label} {con.icon}</p>
                            <div className='w-[6px] h-1'></div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <p className='text-center mt-[-10px]'>
                    {coord?.name_location}
                </p>
                <hr />
                <p className='text-center mt-[-10px]'>
                    {coord?.address ?? 'Alamat tidak tersedia'}
                </p>
            </Popup>
            </Marker>
            ))}
        </>
    );
    }
    
    const MultipleMarkersSpice = () => {
    return (
        <>
            {allSpice
            ?.filter(data => {
                if(searchLocationSpice !== '') {
                    return (data?.name_spice).toLowerCase().includes(searchLocationSpice.toLowerCase())
                }
                return true
            })
            ?.map((coord, index) => (
             <Marker 
                key={index} 
                position={[coord?.lat, coord?.long]} 
                icon={createIconWithTailwind(coord?.icon)}
             >
                <Popup>
                <div className='flex flex-col'>
                    <div className='relative overflow-hidden mb-2 rounded-[12px] w-full h-[160px]'>
                        <img src={coord?.thumbnail} onClick={() => {window.location.href = coord?.thumbnail, '__blank' }} alt="thumbnail" className='cursor-pointer hover:scale-[1.2] duration-300 hover:brightness-[70%]' />
                    </div>
                    <small className='text-[12px] rounded-[8px] hover:brightness-[90%] duration-200 py-3 mb-4 mt-2 bg-blue-600 text-white text-center' onClick={() => {window.location.href = coord?.link, '__blank' }}>Lihat di google map</small>
                    <div className='w-[300px] flex flex-wrap items-center'>
                    {
                        coord.condition && coord.condition.slice(0, 3)
                        .map((con, index) => (
                        <div className='w-max rounded-full bg-white border border-slate-300 h-[35px] mb-2 px-3 flex items-center'>
                            <p key={index}>{con.label} {con.icon}</p>
                            <div className='w-[6px] h-1'></div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <p className='text-center mt-[-10px]'>
                    {coord?.name_spice}
                </p>
                <hr />
                <p className='text-center mt-[-10px]'>
                    {coord?.address ?? 'Alamat tidak tersedia'}
                </p>
            </Popup>
            </Marker>
            ))}
        </>
    );
    }
    
    const MultipleMarkersCulinary = () => {
    return (
        <>
            {allCulinary
            ?.filter(data => {
                if(searchLocationCulinary !== '') {
                    return (data?.name_culinary).toLowerCase().includes(searchLocationCulinary.toLowerCase())
                }
                return true
            })
            ?.map((coord, index) => (
             <Marker 
                key={index} 
                position={[coord?.lat, coord?.long]} 
                icon={createIconWithTailwind(coord?.icon)}
             >
                <Popup>
                <div className='flex flex-col'>
                    <div className='relative overflow-hidden mb-2 rounded-[12px] w-full h-[160px]'>
                        <img src={coord?.thumbnail} onClick={() => {window.location.href = coord?.thumbnail, '__blank' }} alt="thumbnail" className='cursor-pointer hover:scale-[1.2] duration-300 hover:brightness-[70%]' />
                    </div>
                    <small className='text-[12px] rounded-[8px] hover:brightness-[90%] duration-200 py-3 mb-4 mt-2 bg-blue-600 text-white text-center' onClick={() => {window.location.href = coord?.link, '__blank' }}>Lihat di google map</small>
                    <div className='w-[300px] flex flex-wrap items-center'>
                    {
                        coord.condition && coord.condition.slice(0, 3)
                        .map((con, index) => (
                        <div className='w-max rounded-full bg-white border border-slate-300 h-[35px] mb-2 px-3 flex items-center'>
                            <p key={index}>{con.label} {con.icon}</p>
                            <div className='w-[6px] h-1'></div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <p className='text-center mt-[-10px]'>
                    {coord?.name_culinary}
                </p>
                <hr />
                <p className='text-center mt-[-10px]'>
                    {coord?.address ?? 'Alamat tidak tersedia'}
                </p>
            </Popup>
            </Marker>
            ))}
        </>
    );
    }

    useEffect(() => {
        if (startPoint !== null && endPoint !== null) {
          setActiveRangeCustomIcon(true);
          setStartPointPoly([allTour[startPoint].lat, allTour[startPoint].long]);
          setEndPointPoly([allTour[endPoint].lat, allTour[endPoint].long]);
    
        }
    }, [startPoint, endPoint]);

    const formatDistance = (distance) => {
        if (unit === 'kilometer') {
        return (distance / 1000).toFixed(2);
        } else {
        return (Math.round(distance));
        }
    };

    const calculateDistance = () => {
        if (startPoint && endPoint && unit) {
          let point1 = L.latLng([allTour[startPoint].lat, allTour[startPoint].long]);
          let point2 = L.latLng([allTour[endPoint].lat, allTour[endPoint].long]);
          
          let distance = point1.distanceTo(point2);
          
          return formatDistance(distance);
        }
    };

    const exportToGeoJSON = () => {
        const geoJSON = {
        type: 'FeatureCollection',
        features: allTour.map((point, index) => ({
            type: 'Feature',
            properties: { id: index + 1 },
            geometry: {
            type: 'Point',
            coordinates: [point.long, point.lat]
            }
        }))
    };

        // Ubah objek GeoJSON menjadi string
    const geoJSONString = JSON.stringify(geoJSON, null, 2);

        // Buat blob dari string GeoJSON
        const geoJSONBlob = new Blob([geoJSONString], { type: 'application/json' });

        // Simpan sebagai file GeoJSON menggunakan FileSaver.js
        saveAs(geoJSONBlob, 'ecoNusantara(wisata).geojson');
    };

    const exportToGeoJSONSpice = () => {
        const geoJSON = {
        type: 'FeatureCollection',
        features: allSpice.map((point, index) => ({
            type: 'Feature',
            properties: { id: index + 1 },
            geometry: {
            type: 'Point',
            coordinates: [point.long, point.lat]
            }
        }))
    };

        // Ubah objek GeoJSON menjadi string
    const geoJSONString = JSON.stringify(geoJSON, null, 2);

        // Buat blob dari string GeoJSON
        const geoJSONBlob = new Blob([geoJSONString], { type: 'application/json' });

        // Simpan sebagai file GeoJSON menggunakan FileSaver.js
        saveAs(geoJSONBlob, 'ecoNusantara(rempah).geojson');
    };

    const handleClick = (data) => {
        navigate(`/detail-card/${data?.nama}`)
        dispatch(getInformation(data))
    }

    const handleClickDetail = (data) => {
        navigate(`/detail-artikel/${data?.nama}`)
        dispatch(getDetail(data))
    }

    const createIconWithTailwind = (iconText) => {
        const iconMarkup = renderToStaticMarkup(
            <div className="px-2 py-1 text-[30px] bg-transparent rounded-full">
                {iconText}
            </div>
        );
    
        return L.divIcon({
            html: iconMarkup,
            iconSize: [0, 0],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
        });
    }

    const handleEvent = (data) => {
        dispatch(getEvent(data))
        navigate(`/detail-event/${data?.event_id}`)
    }

  return (
    <div className='w-screen h-max overflow-x-hidden'>
        <Navbar />

        <section id='home' className='relative z-[4444444] w-screen h-[50vh] lg:h-[80vh] border-b-[10px] border-b-blue-300 bg-blue-900 lg:bg-blue-700 overflow-hidden flex flex-col justify-center lg:rounded-br-[200px]'>
            <img className='absolute z-[2222] w-[45%] right-0 bottom-[-100px] lg:flex hidden' src={People2} alt="Seorang penjelajah" />
            <img src={Jawa} className='absolute scale-[9] lg:scale-[2] top-12 left-0 lg:flex hidden opacity-[1] z-[-1]' alt='Jawa' />
            <div className='absolute w-[700px] h-[700px] rounded-full bg-blue-900 bottom-[-650px] left-[-100px] blur-[180px]'></div>
            
            <div className='relative w-[100vw] lg:w-[80vw] p-4 lg:p-12 mt-[-40px] text-left z-[55555]'>
                <h1 className='font-bold text-[26px] lg:text-[60px] mb-4 text-white w-full'>Eksplorasi Nusantara <br /> dalam Perjalanan <br /> Gastronomi 🗺️</h1>
                <p className='text-normal w-full text-slate-100 text-[16px] leading-loose lg:flex hidden'>Perluasa Wawasan Kamu Tentang Kekayaan Bumi Nusantara</p>
                <a href="#start">
                    <div className='outline-0 border-slate-300 flex items-center py-4 px-10 lg:px-10 cursor-pointer hover:brightness-[90%] active:scale-[0.98] overflow-hidden rounded-full mt-8 bg-white w-max lg:text-[16px] text-[14px] text-blue-600'>
                        Mulai Petualangan <FaPlaneDeparture className='ml-3' />
                    </div>
                </a>
            </div>
            <div className='lg:flex hidden lg:w-[500px] lg:flex hidden lg:h-[500px] right-0 rounded-full border border-slate-100 absolute'>
            </div>
            <div className='lg:flex hidden lg:w-[500px] lg:flex hidden lg:h-[500px] right-[200px] bottom-[-100px] rounded-full opacity-[0.7] border border-slate-100 absolute'>
            </div>

            <img src={Papua} alt="flower" className='absolute left-[0px] bottom-[100px] opacity-[0.4]' />
            <img src={BLueFlower} alt="flower" className='absolute right-[-100px] bottom-[-60px] lg:hidden flex' />
        </section>

        <section id='start' className='relative w-screen h-max pt-12 lg:pt-14 lg:p-12 p-4'>
            <img src={Kalimantan} className='absolute scale-[1.6] top-0 right-0 opacity-[0.1] lg:opacity-[0.2] z-[-1]' alt='Kalimatan' />
            <div className='rounded-full lg:text-[16px] text-[13px] text-white mb-4 bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Kategori - Wisata, Rempah dan Kuliner</div>
            <h2 className='font-bold flex items-center text-[20px] lg:text-[36px]'><span className='lg:flex mr-2 hidden'>🏔️</span> <span className='relative top-1 ml-1 lg:ml-3'>Ragam Kekayaan Nusantara</span></h2>
            <div className='w-full lg:flex justify-between items-center mt-12'>
                {
                    loading ? (
                        <CardSkeletonType />    
                    ):
                    JenisKekayaanAlam?.map((data, index) => (
                        <div key={index} className='w-[100%] lg:w-[30%] lg:mb-0 mb-6 h-[200px] lg:h-[600px] bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[14px] lg rounded-[12px]:lg:rounded-[20px]'>
                            <div className='relative w-full lg:flex hidden h-[65%] overflow-hidden'>
                                <div className='absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center'>
                                <p>{data?.label}</p> 
                                </div>
                                <img src={data?.gambar} alt="Wisata" className='hover:scale-[1.2] duration-[1s] h-full w-full' />
                            </div>
                            <div className='w-full flex flex-col justify-between h-full lg:h-[35%] pt-2'>
                                <div className='w-full h-[70%] p-4'>
                                    <h2 className='font-bold text-[18px] lg:text-[22px] mb-2'>{data?.nama}</h2>
                                    <p className='leading-loose text-slate-500 text-[12px] lg:text-[14px]'>{data?.deskripsi}</p>
                                </div>
                                <div id='btn-ecoNusantara1' onClick={() => handleClickDetail(data)} className='w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-300'>
                                    Lihat Selengkapnya
                                </div>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </section>

        <section className='relative w-screen h-max px-0 lg:px-12 pt-6 lg:pt-12 pb-6'>
            <img src={Sumatera} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
            <div className='rounded-full text-white lg:text-[16px] text-[13px] lg:ml-0 ml-4 mb-4 bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Jumlah Turis Tahun Lalu (2023)</div>
            <div className='relative w-full lg:flex z-[33] justify-between bg-blue-600 h-max lg:h-[600px] lg:rounded-[16px] items-center border border-slate-300 mt-8'>
                <div className='relative w-full lg:w-1/2 h-1/2 lg:h-full text-white flex p-6 lg:p-14 flex-col justify-between text-left lg:overflow-visible overflow-hidden'>
                    <div className='relative lg:border-l-[2px] h-max lg:h-[30%] lg:pl-12 mb-4 mt-4 flex justify-center flex-col lg:border-l-white'>
                        <h2 className='font-[600] text-[50px] lg:text-[74px] mb-2'>11, 67 <span className='text-[50px] lg:text-[74px]'>Juta</span></h2>
                        <p className='tex-slate-500 leading-loose'>Wisataman Mancanegara</p>
                    </div>
                    <div className='relative lg:pl-12 lg:border-l-[2px] h-max lg:h-[30%] lg:mb-0 mb-6 flex flex-col justify-end lg:border-l-white'>
                        <h2 className='font-[600] text-[50px] lg:text-[74px] flex items-center mb-2'>732,8 <span className='text-[50px] lg:text-[74px] ml-4 relative'>Juta</span></h2>
                        <p className='tex-slate-500 leading-loose'>Wisatawan Nusantara</p>
                    </div>
                    <p className='w-max mt-12 hidden lg:flex items-center bg-white rounded-full px-4 py-2 text-blue-600'><b className='mr-2'>Australia, China, Singapura, Malaysia,</b> (mayoritas) </p>
                </div>
                <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex border border-slate-300 bg-white justify-center border-dashed lg:border-y-[2px] rounded-none lg:border-r-[2px] lg:border-y-blue-500 border-r-blue-500 items-center'>
                    <img src={People1} alt="people" className='w-auto h-full lg:scale-[1.2] relative top-8 lg:top-16' />
                </div>
            </div>
        </section>

        <section id='tour' className='relative w-screen h-max pt-16 px-4 lg:pl-12 pb-12'>
            <img src={Jawa} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Jawa' />
            <div className='rounded-full text-white lg:text-[16px] text-[13px] mb-4 bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Nusa1 - Wisata Populer Nusantara</div>
            <h2 className='font-bold flex items-center text-[20px] lg:text-[36px]'><span className='lg:flex hidden mr-2'>🏔️</span> <span className='relative top-1 flex items-center ml-1 lg:ml-3'>Rekomendasi Wisata <span className='lg:flex hidden ml-2'>Nusantara</span></span></h2>
            <div className='w-full lg:pr-6 pb-5 overflow-x-hidden lg:overflow-x-auto items-center'>
                <div className='w-full lg:w-max lg:flex lg:justify-between items-center mt-12'>
                    {   
                        loading ? (
                            <CardSkeleton />
                        ):
                        Wisata?.map((data, index) => (
                            <div key={index} className='w-[100%] lg:w-[340px] h-[400px] lg:h-[440px] lg:mb-0 mb-6 mr-0 lg:mr-6 bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[12px] lg:rounded-[20px]'>
                                <div className='relative w-full overflow-hidden h-[50%]'>
                                    <div className='absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center'>
                                        <p>Liburan</p> 
                                    </div>
                                    <img src={data?.gambar} alt="Wisata" loading='lazy' className='hover:scale-[1.2] duration-[1s] h-full w-full' />
                                </div>
                                <div className='w-full flex flex-col items-end justify-between h-[50%] pt-2'>
                                    <div className='w-full h-[100%] p-4'>
                                        <h2 className='font-bold text-[22px] mb-2'>{data?.nama}</h2>
                                        <p className='leading-loose text-slate-500 text-[14px]'>{data?.lokasi}</p>
                                    </div>
                                    <div id='btn-ecoNusantara' onClick={() => handleClick(data)} className='w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-300'>
                                        Lihat Selengkapnya
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </section>

        <section id='map' className='relative w-screen h-max p-4 lg:p-12'>
            <img src={Papua} className='absolute scale-[1.6] top-0 right-0 opacity-[0.1] lg:opacity-[0.2] z-[-1]' alt='Kalimatan' />
            <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Geospasial - 5 Pulau Nusantara</div>
            <div className='w-full lg:flex items-center justify-between'>
                <h2 className='font-bold hidden lg:flex items-center text-[24px] lg:text-[36px]'>🗺️ <span className='relative top-1 ml-3'>Peta Wisata Nusantara</span></h2>
                <div className="relative w-full lg:w-[45%] flex lg:mr-5 items-center">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400lg:top-0 relative top-3 lg:top-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <div className='w-full rounded-[10px] lg:mt-0 mt-6 bg-white text-slate-600 outline-0 border border-slate-400 text-[14px] flex items-center pr-2'>
                        <input type="text" name='searchSubdistrict' value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} id="search" className="outline-0 block px-2 py-3 ps-10 lg:mt-0 text-sm text-gray-900 border-0 rounded-lg w-full bg-white focus:ring-blue-600 focus:border-blue-600" placeholder="Cari nama lokasi...." />
                        {
                            searchLocation !== '' ? (
                                <div onClick={() => setSearchLocation('')} className='w-[30px] h-[30px] cursor-pointer active:scale-[0.98] hover:brightness-[90%] bg-red-500 text-white rounded-lg flex items-center justify-center'>
                                    <FaTimes />
                                </div>
                            ):
                                null
                        }
                    </div>
                    {
                        activeMic ? (
                            <div className='rounded-full w-[54px] h-[46px] z-[333] lg:flex hidden items-center justify-center bg-red-500 text-white ml-4 border border-green-700 cursor-pointer active:scale-[0.94] hover:brightness-[90%]' onClick={() => {setActiveMic(false), stopListening()}}><FaMicrophone /></div>
                        ):
                            <div className='rounded-full w-[54px] h-[46px] z-[333] lg:flex hidden items-center justify-center bg-green-500 text-white ml-4 border border-green-700 cursor-pointer active:scale-[0.94] hover:brightness-[90%]' onClick={() => {setActiveMic(true), startListening()}}><FaMicrophone /></div>
                    }
                </div>
            </div>

            {
                loading ? (
                    <div className='relative overflow-hidden bg-slate-200 animate-pulse rounded-[12px] lg:rounded-[20px] mx-auto w-[92vw] border-[2px] border-blue-400 overflow-hidden h-[400px] lg:h-[528px] mt-12'>
                        <div className='absolute top-4 right-4 items-center flex'>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                        </div>
                        <div className='absolute bottom-4 left-4 items-center flex'>
                            <div className='rounded-full bg-slate-300 px-12 py-5 animate-pulse'></div>
                        </div>
                    </div>
                ):
                    <div className='relative overflow-hidden rounded-[12px] lg:rounded-[20px] mx-auto w-[92vw] border-[2px] border-blue-400 overflow-hidden h-[400px] lg:h-max mt-12'>
                    
                    {/* Range Sidebar */}
                    <div className={`absolute z-[3333] w-[31vw] h-screen ${activeRange ? 'left-[0%]' : 'left-[-100%] duration-300'} top-[0px] bg-white shadow-lg p-4 duration-200`}>
                        <div className='w-full px-3 flex items-center justify-between'>
                        <h2 className='text-[16px] relative top-1'>Jarak Antar Titik</h2>
                        <div onClick={() => {setActiveRange(false), setActiveRangeCustomIcon(false)}} className='rounded-[8px] w-[46px] h-[46px] bg-red-500 ml-2 flex items-center justify-center text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                            <FaTimes />
                        </div>
                        </div>

                        <hr className='mt-5 w-[92%] mx-auto' />

                        <div className='w-full h-full pb-12 pt-6 px-2 overflow-y-auto'>
                            <div className='w-full h-max bg-white border pr-3 border-slate--200 rounded-[12px]'>
                            <select name="startPoint" onChange={(e) => setStartPoint(e.target.value)} id="startPoint" className='w-full outline-0 border-0 p-4 bg-transparent rounded-[12px]'>
                                <option value="">Pilih Koordinat Awal</option>
                                {
                                allTour && allTour?.length > 0 ? (
                                    allTour?.map((data, index) => (
                                    <option key={index} value={index}>{data?.name_location}</option>
                                    ))
                                ):
                                    <option value="">Data tidak ada!</option>
                                }
                            </select>
                            </div>

                            <div className='w-full h-max bg-white border  mt-5 pr-3 border-slate--200 rounded-[12px]'>
                            <select name="endPoint" onChange={(e) => setEndPoint(e.target.value)} id="endPoint" className='w-full outline-0 border-0 p-4 bg-transparent rounded-[12px]'>
                            <option value="">Pilih Koordinat Akhir</option>
                            {
                                allTour && allTour?.length > 0 ? (
                                    allTour?.map((data, index) => (
                                    <option key={index} value={index}>{data?.name_location}</option>
                                    ))
                                ):
                                    <option value="">Data tidak ada!</option>
                                }
                            </select>
                            </div>

                            <div className='w-full h-max bg-white border  mt-5 pr-3 border-slate--200 rounded-[12px]'>
                            <select name="unit" onChange={(e) => setUnit(e.target.value)} id="unit" className='w-full outline-0 border-0 p-4 bg-transparent rounded-[12px]'>
                                <option key={1} value="">Pilih Satuan Jarak</option>
                                <option key={3} value='kilometer'>kilometer</option>
                                <option key={2} value='meter'>meter</option>
                            </select>
                            </div>

                            <div className='w-full bg-white flex justify-center items-center h-max border mt-7 p-5 border-[2px] border-dashed border-blue-600 text-blue-600 text-center border-slate--200 rounded-[12px]'>
                            <p>{calculateDistance() ?? 0}</p><p className='ml-2'><b>{unit}</b></p>             
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-max z-[444] flex items-center h-[68px] py-[14px] pl-4 rounded-bl-[32px] absolute top-0 right-2">
                    <div className={`w-max flex items-center top-4 mr-3`}>
                        <div title='Kotak area koordinat' onClick={() => setActiveArea(!activeArea)} className={`${activeArea ? 'bg-green-200' : 'bg-white'} cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-max h-max px-4 py-2 hidden lg:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4 right-4`}>Area titik <FaVectorSquare className="ml-3" /></div>
                        <div onClick={() => exportToGeoJSON()} className={`bg-white hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-max h-max px-4 ml-4 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}>GeoJSON <FaFileExport className="ml-3" /></div>
                        <div title='Lihat garis antar koordinat' onClick={() => setActiveLineMarker(!activeLineMarker)} className={`${activeLineMarker ? 'bg-green-200' : 'bg-white'} ml-4 cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-[45px] h-[45px] px-2 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}><FaGripLines /></div>
                        <div title='Bukan google map' className="hidden lg:flex items-center top-4 mr-3">
                    </div>

                    <div title='Ganti ikon marker' onClick={() => setActieMenuIcon(!activeMenuIcon)} className={`overflow-hidden ${activeMenuIcon ? 'bg-green-200' : 'bg-white'} cursor-pointer active:scale-[0.98] hover:bg-green-200 ml-1 z-[22222] w-[45px] h-[45px] px-2 py-2 hidden lg:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-52`}><FaIcons /></div>
                    <div className={`w-[45px] absolute top-20 duration-200 ease ${activeMenuIcon ? 'right-3' : 'right-[-55px]'} bg-white  overflow-hidden flex-col h-max border border-slate-700 rounded-full flex lfex-col items-center justify-center`}>
                    <div onClick={() => setSelectIcon('🏢')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                        <p>🏢</p>
                    </div>
                    <div onClick={() => setSelectIcon('🏫')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                        <p>🏫</p>
                    </div>
                    <div onClick={() => setSelectIcon('🏭')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                        <p>🏭</p>
                    </div>
                    <div onClick={() => setSelectIcon('')} className='text-center flex justify-center items-center cursor-pointer active:scale-[0.98] hover:bg-green-200 border-b w-full py-5 min-h-[50px] border-slate-700 text-black'>
                        <p>📍</p>
                    </div>
                    </div>

                </div>
                </div>
                <div className='absolute right-2 pl-4 lg:pl-7 bottom-4 w-full flex items-center justify-between'>
                    <div className='w-max flex items-center'>
                        <div className={`z-[552] ml-0 w-max h-max px-4 py-2 flex items-center justify-center text-center bg-white rounded-full text-[16px] border border-slate-700 bottom-4`}>
                        {currentPosition ? `${currentPosition[0].toFixed(6)}  |  ${currentPosition[1].toFixed(6)}` : '0, 0'}
                        </div>
                    </div>
                </div>
                    <MapContainer center={isDesktop ? center : [-20.5555, 120.5525]} zoom={isDesktop ? zoom : 3} style={{ height: "80vh", width: "100%" }}>
                        <MapEventsHandler />
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <MultipleMarkers />

                        {activeArea && areas.map((area, index) => (
                            <Polygon key={index} positions={area.coordinates} color={checkForDisaster(area?.condition) ? "red" : "blue"} fillColor={checkForDisaster(area?.condition) ? "red" : "green"} fillOpacity={0.4}>
                                <Tooltip>{area.name}</Tooltip>
                            </Polygon>
                        ))}

                        {
                            activeLineMarker ? (
                                <Polyline positions={lineMarkers} color="#008ada" />
                            ):
                            null
                        }

                        {
                            activeRangeCustomIcon ? (
                                <Polyline positions={[startPointPoly, endPointPoly]} color="blue">
                                    <Tooltip>{calculateDistance()} {unit}</Tooltip>
                                </Polyline>
                            ):
                            null
                        }
                    </MapContainer>
                    </div>
            }
        </section>

        <section id='contact' className='relative w-screen h-max lg:pt-0 pt-16 p-4 lg:p-12 lg:block hidden'>
            <img src={Sumatera} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
            <div className='rounded-full text-white lg:mb-4 bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Pemandu Nusantara - Profesional</div>
            <h2 className='font-bold flex items-center text-[20px] lg:mt-0 mt-6 lg:text-[36px]'>☎️ <span className='relative top-1 ml-3'>Kontak Pemandu Wisata</span></h2>
            <div className='w-full flex items-center overflow-x-auto'>
                <div className='w-max flex items-center pb-3'>
                    {
                        loading ? (
                            <CardSkeletonContact />
                        ):
                        allContact && allContact?.length > 0 ? (
                            allContact?.map((data, index) => (
                                <div key={index} className='w-[90vw] lg:w-[350px] flex z-[33] flex-col justify-between items-center mt-8 mr-3 lg:mr-6'>
                                <div className='w-full h-[440px] my-3 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg px-5 pt-5'>
                                <div className='relative w-full h-[60%] rounded-[12px] lg:rounded-[20px] bg-contain border-b border-b-slate-400 overflow-hidden'>
                                    <img src={data?.photo} className='rounded-[12px] lg:rounded-[20px] w-full h-auto' alt="foto-pemandu" />
                                </div>
                                <div className='relative w-full h-[40%] flex justify-center flex-col px-4 before:absolute before:w-full before:h-[40%] before:bg-blue-600 before:bottom-0 before:left-0 before:rounded-tl-full before:rounded-tr-full overflow-hidden before:bg-opacity-[0.2]'>
                                        <div className='w-full text-center'>
                                            <h2 className='text-[20px]'>{data?.name_contact}</h2>
                                            <small>Indonesia</small>
                                            <a href={`https://wa.me/${data?.number}`} target='__blank'>
                                                <div className='w-[55px] h-[55px] z-[222] relative mx-auto bg-blue-600 text-white flex items-center justify-center p-1 rounded-full my-3 cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                                                    <FaWhatsapp />
                                                </div>
                                            </a>
                                        </div>
                                </div>   
                                </div>
                                </div>
                            ))
                        ):
                            null
                    }
                </div>
            </div>
        </section>

        <section className='relative w-screen h-max p-0 lg:px-12 pt-12 pb-6'>
            <img src={Sumatera} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
            <div className='rounded-full text-white mb-4 lg:ml-0 ml-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Kekayaan Rempah Nusantara</div>
            <div className='relative w-full lg:flex z-[33] justify-between lg:pb-0 pb-4 bg-blue-600 h-max lg:h-[600px] lg:rounded-[16px] items-center mt-8'>
                <div className='relative lg:absolute flex lg:mt-0 mt-12 lg:hidden right-0 w-full lg:w-1/2 lg:mb-0 mb-4 h-full flex items-center'>
                    <img src={RempahBg} alt="spice" className='lg:scale-[1.1] relative top-10 lg:bottom-1' />
                </div>
                <div className='relative w-full h-max lg:h-full overflow-hidden text-white flex p-6 lg:p-14 flex-col justify-between text-left'>
                    <img src={Jawa} className='absolute scale-[3] bottom-[20%] left-[30%] opacity-[0.3] z-[-1]' alt='Sumatera' />
                    <h2 className='text-[32px] lg:text-[50px] w-[96%] lg:w-1/2'>Lebih dari <b>100+</b> Jenis Rempah, Nusantara</h2>
                    <div className='w-[100%] lg:w-1/2 lg:mt-0 mt-6 hidden lg:flex flex-wrap'>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Kunyit</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Kayu Manis</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Lengkuas</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Jahe</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Kapulaga</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Cengkeh</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Pala</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Lada</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Andaliman</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-2 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Vanili</p>
                        </div>
                    </div>
                    <p className='w-max mt-6 lg:mt-12 lg:text-[16px] text-[12px] flex items-center bg-white rounded-full px-4 py-2 text-blue-600'><b className='mr-1 lg:flex hidden'>Indonesia</b> penghasil rempah terbesar ke-4 dunia!</p>
                </div>
                <div className='relative lg:absolute lg:flex hidden right-0 w-full lg:w-1/2 lg:mb-0 mb-12 h-full flex items-center'>
                    <img src={RempahBg} alt="people" className='scale-[1.1] relative bottom-1' />
                </div>
            </div>
        </section>

        <div id='spice' className='relative w-screen h-max pt-12 lg:pt-16 px-4 lg:pl-12 pb-8 lg:pb-12'>
            <img src={Jawa} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2]  z-[-1]' alt='Jawa' />
            <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Nusa2 - Cita Rasa Rempah</div>
            <h2 className='font-bold hidden lg:flex items-center text-[36px]'>🫚 <span className='relative top-1 ml-3'>Aneka Ragam Rempah</span></h2>
            <div className='w-full pr-0 lg:pr-6 pb-5 overflow-x-hidden lg:overflow-x-auto items-center'>
                <div className='w-full lg:w-max lg:flex lg:justify-between items-center mt-12'>
                    {
                        loading ? (
                            <CardSkeleton />
                        ):
                        Rempah?.map((data, index) => (
                            <div key={index} className='w-[100%] h-[400px] lg:w-[340px] lg:h-[440px] lg:mb-0 mb-6 mr-0 lg:mr-6 bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[12px] lg:rounded-[20px]'>
                                <div className='relative w-full overflow-hidden h-[50%]'>
                                    <div className='absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center'>
                                        <p>Rempah</p> 
                                    </div>
                                    <img src={data?.gambar} alt="Wisata" loading='lazy' className='hover:scale-[1.2] duration-[1s] h-auto w-full' />
                                </div>
                                <div className='w-full flex flex-col items-end justify-between h-[50%] pt-2'>
                                    <div className='w-full h-[100%] p-4'>
                                        <h2 className='font-bold text-[22px] mb-2'>{data?.nama}</h2>
                                        <p className='leading-loose text-slate-500 text-[14px]'>{data?.lokasi}</p>
                                    </div>
                                    <div onClick={() => handleClick(data)} className='w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-200'>
                                        Lihat Selengkapnya
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>

        <section className='relative w-screen h-max p-4 lg:p-12 lg:mt-0 mt-4'>
            <img src={Papua} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2]  z-[-1]' alt='Kalimatan' />
            <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Geospasial - Rempah Nusantara</div>
            <div className='w-full flex items-center justify-between'>
                <h2 className='font-bold hidden lg:flex items-center text-[36px]'>🗺️ <span className='relative top-1 ml-3'>Peta Rempah Nusantara</span></h2>
                <div className="relative w-full lg:w-[45%] flex lg:mr-5 items-center">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400lg:top-0 relative top-3 lg:top-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <div className='w-full rounded-[10px] lg:mt-0 mt-6 bg-white text-slate-600 outline-0 border border-slate-400 text-[14px] flex items-center pr-2'>
                        <input type="text" name='searchLocationSpice' value={searchLocationSpice} onChange={(e) => setSearchLocationSpice(e.target.value)} id="search" className="outline-0 block px-2 py-3 ps-10 lg:mt-0 text-sm text-gray-900 border-0 rounded-lg w-full bg-white focus:ring-blue-600 focus:border-blue-600" placeholder="Cari nama rempah...." />
                        {
                            searchLocationSpice !== '' ? (
                                <div onClick={() => setSearchLocationSpice('')} className='w-[30px] h-[30px] cursor-pointer active:scale-[0.98] hover:brightness-[90%] bg-red-500 text-white rounded-lg flex items-center justify-center'>
                                    <FaTimes />
                                </div>
                            ):
                                null
                        }
                    </div>
                    {
                        activeMicSpice ? (
                            <div className='rounded-full w-[54px] h-[46px] z-[333] lg:flex hidden items-center justify-center bg-red-500 text-white ml-4 border border-green-700 cursor-pointer active:scale-[0.94] hover:brightness-[90%]' onClick={() => {setActiveMicSpice(false), stopListeningSpice()}}><FaMicrophone /></div>
                        ):
                            <div className='rounded-full w-[54px] h-[46px] z-[333] lg:flex hidden items-center justify-center bg-green-500 text-white ml-4 border border-green-700 cursor-pointer active:scale-[0.94] hover:brightness-[90%]' onClick={() => {setActiveMicSpice(true), startListeningSpice()}}><FaMicrophone /></div>
                    }
                </div>
            </div>
            {
                 loading ? (
                    <div className='relative overflow-hidden bg-slate-200 animate-pulse rounded-[12px] lg:rounded-[20px] mx-auto w-[92vw] border-[2px] border-blue-400 overflow-hidden h-[400px] lg:h-[528px] mt-12'>
                        <div className='absolute top-4 right-4 items-center flex'>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                        </div>
                        <div className='absolute bottom-4 left-4 items-center flex'>
                            <div className='rounded-full bg-slate-300 px-12 py-5 animate-pulse'></div>
                        </div>
                    </div>
                ):
                    <div className='relative overflow-hidden rounded-[12px] lg:rounded-[20px] mx-auto w-[92vw] border-[2px] border-blue-400 overflow-hidden h-[400px] lg:h-max mt-12'>
                        
                        <div className="w-max z-[444] flex items-center h-[68px] py-[14px] pl-4 rounded-bl-[32px] absolute top-0 right-2">
                            <div className={`w-max flex items-center top-4 mr-3`}>
                                <div title='Kotak area koordinat' onClick={() => setActiveAreaSpice(!activeAreaSpice)} className={`${activeAreaSpice ? 'bg-green-200' : 'bg-white'} cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-max h-max px-4 py-2 hidden lg:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4 right-4`}>Area titik <FaVectorSquare className="ml-3" /></div>
                                <div onClick={() => exportToGeoJSONSpice()} className={`bg-white hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-max h-max px-4 ml-4 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}>GeoJSON <FaFileExport className="ml-3" /></div>
                                <div title='Lihat garis antar koordinat' onClick={() => setActiveLineMarkerSpice(!activeLineMarkerSpice)} className={`${activeLineMarkerSpice ? 'bg-green-200' : 'bg-white'} ml-4 cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-[45px] h-[45px] px-2 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}><FaGripLines /></div>
                                <div title='Bukan google map' className="hidden lg:flex items-center top-4 mr-3">
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-2 pl-5 lg:pl-7 bottom-4 w-full flex items-center justify-between'>
                        <div className='w-max flex items-center'>
                            <div className={`z-[552] ml-0 w-max h-max px-4 py-2 flex items-center justify-center text-center bg-white rounded-full text-[16px] border border-slate-700 bottom-4`}>
                            {currentPositionSpice ? `${currentPositionSpice[0].toFixed(6)}  |  ${currentPositionSpice[1].toFixed(6)}` : '0, 0'}
                            </div>
                        </div>
                    </div>
                        <MapContainer center={isDesktop ? center : [-20.5555, 120.5525]} zoom={isDesktop ? zoom : 3} style={{ height: "80vh", width: "100%" }}>
                            <MapEventsHandlerSpice />
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <MultipleMarkersSpice />

                            {activeAreaSpice && areasSpice.map((area, index) => (
                                <Polygon key={index} positions={area.coordinates} color={checkForDisaster(area?.condition) ? "red" : "blue"} fillColor={checkForDisaster(area?.condition) ? "red" : "green"} fillOpacity={0.4}>
                                    <Tooltip>{area.name_spice}</Tooltip>
                                </Polygon>
                            ))}

                            {
                                activeLineMarkerSpice ? (
                                    <Polyline positions={lineMarkersSpice} color="#008ada" />
                                ):
                                null
                            }
                        </MapContainer>
                    </div>
            }
        </section>

        <section className='relative w-screen h-max px-4 lg:px-12 pt-12 pb-6'>
            <img src={Sumatera} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
            <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Kulineran Nusantara</div>
            <div className='relative w-full lg:flex z-[33] justify-between bg-blue-600 lg:pb-0 pb-6 h-max lg:h-[600px] rounded-[16px] items-center mt-8'>
                <div className='relative right-0 w-full h-full lg:hidden flex items-center'>
                    <img src={FoodBg} alt="people" className='scale-[0.8] lg:scale-[0.95] lg:right-[-30px] relative top-10 lg:top-12 lg:mb-0 mb-6 lg:bottom-5 lg:rotate-[20deg]' />
                </div>
                <div className='relative w-full h-max lg:h-full overflow-hidden text-white flex p-4 lg:p-14 flex-col justify-between text-left'>
                    <img src={Jawa} className='absolute scale-[3] lg:bottom-[20%] left-[30%] opacity-[0.3] z-[-1]' alt='Sumatera' />
                    <h2 className='text-[32px] lg:ml-0 ml-2 lg:text-[50px] w-[90%] lg:w-1/2'>JunkFood? Makanan Khas <b>Daerah</b> Aja! 🍲</h2>
                    <div className='w-fll lg:w-1/2 hidden lg:flex flex-wrap mt-6'>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Nasi Goreng</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Bakso Malang</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Gado-gado</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Rendang</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Batagor</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Tahu Gejrot</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Soto Betawi</p>
                        </div>
                        <div className='w-max h-max rounded-full px-5 lg:px-7 py-2 lg:text-[16px] text-[12px] border border-white flex items-center justify-center mr-3 lg:mr-4 mb-6 bg-white text-blue-600'>
                            <p>Sate Lilit</p>
                        </div>
                    </div>
                    <p className='w-max mt-6 lg:mt-12 flex items-center bg-white rounded-full lg:text-[16px] text-[12px] px-4 py-2 text-blue-600'><b className='mr-1'>Rendang</b> <span className='hidden lg:flex ml-2'>adalah</span> makanan terenak didunia!</p>
                </div>
                <div className='absolute right-0 w-1/2 h-full hidden lg:flex items-center'>
                    <img src={FoodBg} alt="people" className='scale-[0.95] right-[-30px] relative bottom-5 rotate-[20deg]' />
                </div>
            </div>
        </section>

        <section id='culinary' className='relative w-screen h-max pt-14 lg:pt-16 pl-6 lg:pl-12 pb-12'>
            <img src={Jawa} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2]  z-[-1]' alt='Jawa' />
            <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Kuliner Lokal Nusantara</div>
            <div className='w-full overflow-x-auto mt-10'>
                <div className='w-max pr-6 pb-6 flex items-center'>
                   {
                        loading ? (
                            <CardSkeletonCulinary />
                        ):
                        Kuliner?.map((data, index) => (
                            <div key={index} className='relative w-[140px] h-[300px] mr-12 rounded-full bg-white shadow-lg py-4 before:absolute before:w-full before:h-[80%] before:bg-blue-600 before:bottom-0 before:left-0 before:rounded-tl-full before:rounded-tr-full overflow-hidden before:bg-opacity-[0.2] border-[2px] border-dashed border-blue-400 text-center flex flex-col items-center justify-between'>
                                <div className='relative border border-white w-[70px] lg:w-[60px] h-[70px] lg:h-[60px] bg-white rounded-full overflow-hidden bg-contain'>
                                    <img src={data?.gambar} alt="ikon-kategori" loading='lazy' className='rounded-full h-full' />
                                </div>
                                <div>
                                    <p>{data?.nama}</p>
                                    <small>{data?.lokasi}</small>
                                </div>
                                <div onClick={() => handleClick(data)} className='relative w-[60px] h-[60px] bg-blue-600 rounded-full text-white flex items-center justify-center cursor-pointer active:scale-[0.98] hoveer:brightness-[90%]'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        ))
                   }
                </div>
            </div>
        </section>

        <div className='relative w-screen h-max p-6 lg:p-12'>
            <img src={Papua} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2]  z-[-1]' alt='Kalimatan' />
            <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Geospasial - Kuliner Nusantara</div>
            <div className='w-full flex items-center justify-between'>
                <h2 className='font-bold hidden lg:flex items-center text-[36px]'>🗺️ <span className='relative top-1 ml-3'>Peta Kuliner Nusantara</span></h2>
                <div className="relative w-full lg:w-[45%] flex lg:mr-5 items-center">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400lg:top-0 relative top-3 lg:top-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <div className='w-full rounded-[10px] lg:mt-0 mt-6 bg-white text-slate-600 outline-0 border border-slate-400 text-[14px] flex items-center pr-2'>
                        <input type="text" name='searchSubdistrict' value={searchLocationCulinary} onChange={(e) => setSearchLocationCulinary(e.target.value)} id="search" className="outline-0 block px-2 py-3 ps-10 lg:mt-0 text-sm text-gray-900 border-0 rounded-lg w-full bg-white focus:ring-blue-600 focus:border-blue-600" placeholder="Cari nama kuliner...." />
                        {
                            searchLocationCulinary !== '' ? (
                                <div onClick={() => setSearchLocationCulinary('')} className='w-[30px] h-[30px] cursor-pointer active:scale-[0.98] hover:brightness-[90%] bg-red-500 text-white rounded-lg flex items-center justify-center'>
                                    <FaTimes />
                                </div>
                            ):
                                null
                        }
                    </div>
                    {
                        activeMicCulinary ? (
                            <div className='rounded-full w-[54px] h-[46px] z-[333] lg:flex hidden items-center justify-center bg-red-500 text-white ml-4 border border-green-700 cursor-pointer active:scale-[0.94] hover:brightness-[90%]' onClick={() => {setActiveMicCulinary(false), stopListeningCulinary()}}><FaMicrophone /></div>
                        ):
                            <div className='rounded-full w-[54px] h-[46px] z-[333] lg:flex hidden items-center justify-center bg-green-500 text-white ml-4 border border-green-700 cursor-pointer active:scale-[0.94] hover:brightness-[90%]' onClick={() => {setActiveMicCulinary(true), startListeningCulinary()}}><FaMicrophone /></div>
                    }
                </div>
            </div>
            {
                 loading ? (
                    <div className='relative overflow-hidden bg-slate-200 animate-pulse rounded-[12px] lg:rounded-[20px] mx-auto w-[90vw] lg:w-[92vw] border-[2px] border-blue-400 overflow-hidden h-[400px] lg:h-[528px] mt-12'>
                        <div className='absolute top-4 right-4 items-center flex'>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                            <div className='rounded-full bg-slate-300 px-7 lg:px-12 py-5 ml-4 animate-pulse'></div>
                        </div>
                        <div className='absolute bottom-4 left-4 items-center flex'>
                            <div className='rounded-full bg-slate-300 px-12 py-5 animate-pulse'></div>
                        </div>
                    </div>
                ):
                    <div className='relative overflow-hidden rounded-[12px] lg:rounded-[20px] mx-auto w-full lg:w-[92vw] border-[2px] border-blue-400 overflow-hidden h-[400px] lg:h-max mt-12'>
                        
                        <div className="w-max z-[444] flex items-center h-[68px] py-[14px] pl-4 rounded-bl-[32px] absolute top-0 right-2">
                            <div className={`w-max flex items-center top-4 mr-3`}>
                                <div title='Kotak area koordinat' onClick={() => setActiveAreaCulinary(!activeAreaCulinary)} className={`${activeAreaCulinary ? 'bg-green-200' : 'bg-white'} cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-max h-max px-4 py-2 hidden lg:flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4 right-4`}>Area titik <FaVectorSquare className="ml-3" /></div>
                                <div onClick={() => exportToGeoJSONCulinary()} className={`bg-white hover:bg-green-200 cursor-pointer active:scale-[0.98] z-[22222] w-max h-max px-4 ml-4 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 top-4`}>GeoJSON <FaFileExport className="ml-3" /></div>
                                <div title='Lihat garis antar koordinat' onClick={() => setActiveLineMarkerCulinary(!activeLineMarkerCulinary)} className={`${activeLineMarkerCulinary ? 'bg-green-200' : 'bg-white'} ml-4 cursor-pointer active:scale-[0.98] hover:bg-green-200 z-[22222] w-[45px] h-[45px] px-2 py-2 flex items-center justify-center text-center rounded-full text-[16px] border border-slate-700 right-0 top-36`}><FaGripLines /></div>
                                <div title='Bukan google map' className="hidden lg:flex items-center top-4 mr-3">
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-2 pl-4 lg:pl-7 bottom-4 w-full flex items-center justify-between'>
                        <div className='w-max flex items-center'>
                            <div className={`z-[552] ml-0 w-max h-max px-4 py-2 flex items-center justify-center text-center bg-white rounded-full text-[16px] border border-slate-700 bottom-4`}>
                            {currentPositionCulinary ? `${currentPositionCulinary[0].toFixed(6)}  |  ${currentPositionCulinary[1].toFixed(6)}` : '0, 0'}
                            </div>
                        </div>
                    </div>
                        <MapContainer center={isDesktop ? center : [-20.5555, 120.5525]} zoom={isDesktop ? zoom : 3} style={{ height: "80vh", width: "100%" }}>
                            <MapEventsHandlerCulinary />
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <MultipleMarkersCulinary />

                            {activeAreaCulinary && areasCulinary.map((area, index) => (
                                <Polygon key={index} positions={area.coordinates} color={"blue"} fillColor={"green"} fillOpacity={0.4}>
                                    <Tooltip>{area.name_culinary}</Tooltip>
                                </Polygon>
                            ))}

                            {
                                activeLineMarkerCulinary ? (
                                    <Polyline positions={lineMarkersCulinary} color="#008ada" />
                                ):
                                null
                            }
                        </MapContainer>
                    </div>
            }
        </div>

        {/* OPEN API */}
        <Api />

        {/* Articles */}
        {
            loading ? (
                <CardSkeletonArticle />
            ):
                <Articles />
        }

        {/* Events */}
        {
            loading ? (
                <CardSkeletonEvent />
            ):
                <section className='relative w-screen h-max text-left pt-12 lg:pt-14 lg:p-12 px-4 lg:px-12'>
                    <img src={Papua} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2]  z-[-1]' alt='Kalimatan' />
                    <div className='rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-900 lg:bg-blue-400 w-max py-3 px-6'>Kegiatan - Kita Nusantara</div>
                    <h2 className='font-bold hidden lg:flex items-center text-[24px] lg:text-[36px]'>📌 <span className='relative top-1 ml-3'>Acara Nusantara {new Date().getFullYear()}</span></h2>
                    <div className='relative w-full min-h-[220px] lg:h-[600px] border-dashed border-[2px] border-blue-400 overflow-hidden rounded-[16px] mt-12'>
                        <div className='absolute z-[999999] left-5 lg:left-12 bottom-5 lg:bottom-12 h-max w-max text-white'>
                            <h2 className='text-[16px] overflow-hidden overflow-ellipsis whitespace-nowrap w-[80vw] lg:text-[36px] font-[500] mb-2'>{allEvent[0]?.name_event}</h2>
                            <p className='w-[80%] lg:w-[80%] lg:text-[16px] text-[12px] overflow-hidden overflow-ellipsis whitespace-nowrap'>{allEvent[0]?.description}</p>
                            <hr className='mt-5' />
                            <p onClick={() => handleEvent(allEvent[0])} className='flex items-center w-max mt-5 text-blue-200 underline cursor-pointer hover:brightness-[90%] active:scale-[0.98]'>
                                Lihat Selengkapnya <span className='ml-2'>👉</span>
                            </p>
                        </div>  
                        <div className='w-full h-full bg-slate-800 bg-opacity-[0.7] absolute z-[444]'></div>
                        <img src={allEvent[0]?.thumbnail} alt="event-image" className='w-full' />
                    </div>
                </section>
        }
        
        {/* Footer */}
        <Footer />

    </div>
  )
}

export default Homepage
