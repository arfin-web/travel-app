import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef: any) {
    return (slider: any) => {
        function removeActive() {
            slider.slides.forEach((slide: any) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: any) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide: any, idx: any) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main: any) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

const ImageCarousel = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    const destinationImages = [
        {
            key: 1,
            imageSrc: "https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?w=996&t=st=1700210691~exp=1700211291~hmac=1afe37cdfe4d04d62858a172961389f158a198955a8ab8073f3d5ea045c0bef3",
        },
        {
            key: 2,
            imageSrc: "https://img.freepik.com/free-photo/famous-tower-bridge-evening-london-england_268835-1390.jpg?w=996&t=st=1700210712~exp=1700211312~hmac=355a2a86995a47f93f5c2d33864fb2342b27eeb2646cd4fb244e8bb7f5423419",
        },
        {
            key: 3,
            imageSrc: "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=996&t=st=1700210728~exp=1700211328~hmac=21fbf2e281fec3bd566f7aef9e392a5211d29146770f5d19027cb496f65a06c2",
        },
        {
            key: 4,
            imageSrc: "https://img.freepik.com/free-photo/view-london-city-sunset_268835-1397.jpg?w=996&t=st=1700210756~exp=1700211356~hmac=2e54bd9328c3d6c277377ecad3fc1feee4bcf7bd77dd4eae058ad6d24305b798",
        },
        {
            key: 5,
            imageSrc: "https://img.freepik.com/free-photo/closeup-shot-two-domed-towers-old-royal-naval-college-greenwich-london_181624-44376.jpg?w=1060&t=st=1700210782~exp=1700211382~hmac=3aeac7feba08af2c6fb152abda0a1dae095e148c3bdaa8f62b3692c90ee100f8",
        },
    ];
    return (
        <>
            <div className="grid grid-cols-1 gap-y-2 place-items-center">
                <div ref={sliderRef} className="keen-slider">
                    {
                        destinationImages.map((image) => (
                            <div key={image.key} className="carousel-item overflow-hidden keen-slider__slide">
                                <img src={image.imageSrc} className="rounded-sm" alt="gallary" />
                            </div>
                        ))
                    }
                </div>
                <div ref={thumbnailRef} className="keen-slider thumbnail">
                    {
                        destinationImages.map((image) => (
                            <div key={image.key} className="carousel-item overflow-hidden keen-slider__slide">
                                <img src={image.imageSrc} className="rounded-sm" alt="gallary" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default ImageCarousel