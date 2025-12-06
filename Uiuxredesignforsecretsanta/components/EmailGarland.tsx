// Static Light Garland for Email Template
// This is a static version without animations for email compatibility

export function EmailGarland() {
  const lights = [
    { color: '#D24545', size: 10 },    // Festive Red
    { color: '#FFD700', size: 8 },     // Gold
    { color: '#2F4F4F', size: 11 },    // Forest Green
    { color: '#D24545', size: 9 },     // Festive Red
    { color: '#FFD700', size: 10 },    // Gold
    { color: '#2F4F4F', size: 8 },     // Forest Green
    { color: '#D24545', size: 11 },    // Festive Red
    { color: '#FFD700', size: 9 },     // Gold
    { color: '#2F4F4F', size: 10 },    // Forest Green
    { color: '#D24545', size: 8 },     // Festive Red
    { color: '#FFD700', size: 11 },    // Gold
    { color: '#2F4F4F', size: 9 },     // Forest Green
    { color: '#D24545', size: 10 },    // Festive Red
    { color: '#FFD700', size: 8 },     // Gold
    { color: '#2F4F4F', size: 11 },    // Forest Green
  ];

  return (
    <div style={{
      width: '100%',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      margin: '0 auto',
      padding: '0 20px',
    }}>
      {/* Horizontal line */}
      <div style={{
        position: 'absolute',
        left: '20px',
        right: '20px',
        height: '1px',
        backgroundColor: '#333333',
        top: '50%',
        transform: 'translateY(-50%)',
      }} />
      
      {/* Light orbs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        {lights.map((light, index) => (
          <div
            key={index}
            style={{
              width: `${light.size}px`,
              height: `${light.size}px`,
              borderRadius: '50%',
              backgroundColor: light.color,
              boxShadow: `
                0 2px 4px rgba(0, 0, 0, 0.15),
                0 0 8px ${light.color}66,
                0 0 12px ${light.color}33
              `,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
