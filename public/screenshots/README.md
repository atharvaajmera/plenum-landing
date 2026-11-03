# Product Screenshots

Real application captures used across Desktop and Android frames in the Hero and Showcase sections of the landing page.

## Asset Registry

| File | Platform | Theme | Screen / Description | Dimensions | Location on Site |
|---|---|---|---|---|---|
| `desktop-dark.png` | Windows Desktop | Dark | Home screen showing local IP, device name, and action hub | 1917×1041 | Hero & Showcase |
| `desktop-light.png` | Windows Desktop | Light | Home screen showing local IP, device name, and action hub | 1917×1041 | Hero & Showcase |
| `mobile-dark.png` | Android | Dark | Receive screen with animated radar, QR code, and room code | 460×1024 | Showcase |
| `mobile-light.png` | Android | Light | Receive screen with animated radar, QR code, and room code | 460×1024 | Showcase |
| `mobile-dark-send.png` | Android | Dark | Send screen with file/folder selection, QR scanner CTA, and room code input | 460×1024 | Hero |
| `mobile-light-send.png` | Android | Light | Send screen with file/folder selection, QR scanner CTA, and room code input | 460×1024 | Hero |

## Capture Provenance & Privacy

- **Desktop assets**: Captured from live Windows build of the desktop client. Non-sensitive demo device name (`atharva-victus`) and private LAN address (`192.168.1.7`).
- **Mobile assets**: Captured directly from live Android client APK on physical device. Status bar chrome cropped cleanly. Room code shown is an ephemeral demo code (`64K7V9NJ7`) with no active transfer secrets or sensitive content.
- **Both themes**: Real screenshots captured under native Dark and Light modes respectively; no mockups or synthetic CSS recoloring.
- **Above-the-fold loading**: Hero screenshot frames utilize eager loading (`priority={true}`) to render immediately without lazy-load blank states. Showcase frames retain deferred loading.

