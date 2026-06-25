import { Reveal } from "@/components/Reveal";

const technologies = [
  { name: "Zigbee", icon: "zigbee" },
  { name: "Matter", icon: "matter" },
  { name: "KNX", icon: "knx" },
  { name: "Modbus", monogram: "MB" },
  { name: "DALI", monogram: "DA" },
  { name: "MQTT", icon: "mqtt" },
  { name: "Яндекс Умный дом (Алиса)", icon: "yandex" },
  { name: "Apple HomeKit", icon: "applehomekit" },
  { name: "Google Home", icon: "googlehome" },
  { name: "Samsung SmartThings", icon: "smartthings" },
  { name: "Iridi", monogram: "IR" },
  { name: "Home Assistant", icon: "homeassistant" },
  { name: "Sunricher", monogram: "SR" },
  { name: "Aqara", icon: "aqara" },
  { name: "Xiaomi", icon: "xiaomi" },
  { name: "Tuya Smart", icon: "tuya" },
  { name: "Hikvision", icon: "hikvision" },
  { name: "Dahua", icon: "dahua" },
] as const;

const marqueeItems = [...technologies, ...technologies];

export function PartnersMarquee() {
  return (
    <Reveal delay={180} className="partners-panel" variant="fade">
      <div className="partners-header">
        <div>
          <div className="partners-eyebrow">Partners &amp; Technologies</div>
          <h3 className="partners-title">Открытая экосистема мировых стандартов.</h3>
        </div>
        <p className="partners-copy">
          Интегрируем протоколы, платформы и устройства в единую инженерную среду.
        </p>
      </div>
      <div className="partners-marquee" aria-label="Партнёры и технологии">
        <div className="partners-marquee-track">
          {marqueeItems.map((item, index) => (
            <div className="partners-logo-card" key={`${item.name}-${index}`}>
              {"icon" in item ? (
                <>
                  <img
                    src={`https://cdn.simpleicons.org/${item.icon}/1d1d1f`}
                    alt=""
                    className="partners-logo"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                      const fallback = event.currentTarget.nextElementSibling;
                      if (fallback instanceof HTMLElement) fallback.hidden = false;
                    }}
                  />
                  <span className="partners-monogram" aria-hidden="true" hidden>
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                </>
              ) : (
                <span className="partners-monogram" aria-hidden="true">
                  {item.monogram}
                </span>
              )}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
