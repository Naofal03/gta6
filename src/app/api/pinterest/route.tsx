import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

// Pre-load all available background images as Base64 data URLs
const loadBase64Image = (filename: string): string => {
  try {
    const filePath = path.join(process.cwd(), 'public/images', filename);
    if (fs.existsSync(filePath)) {
      const buffer = fs.readFileSync(filePath);
      return `data:image/jpeg;base64,${buffer.toString('base64')}`;
    }
  } catch (e) {
    console.error(`Failed to load background image: ${filename}`, e);
  }
  return '';
};

const images = {
  viceCity: loadBase64Image('bg_vice_city.jpg'),
  ps5Gta6: loadBase64Image('bg_ps5_gta6.jpg'),
  xboxGta6: loadBase64Image('bg_xbox_gta6.jpg'),
  packPs5: loadBase64Image('bg_pack_ps5.jpg'),
  ssdPs5: loadBase64Image('bg_ssd_ps5.jpg'),
  ps5ProSlim: loadBase64Image('bg_ps5_pro_slim.jpg'),
  casqueAudio: loadBase64Image('bg_casque_audio.jpg'),
  pcSetup: loadBase64Image('bg_pc_setup.jpg'),
};

const THEMES: Record<string, {
  bgImage: string;
  overlay: string;
  accent: string;
  accentShadow: string;
  glowColor: string;
  badgeBg: string;
  brandColor: string;
}> = {
  // Theme 1: PS5 GTA 6 Pre-order
  'ps5_gta6': {
    bgImage: images.ps5Gta6 || images.viceCity,
    overlay: 'linear-gradient(180deg, rgba(13,2,33,0.75) 0%, rgba(26,5,51,0.55) 50%, rgba(45,11,78,0.85) 100%)',
    accent: '#ff2d78',
    accentShadow: 'rgba(255,45,120,0.6)',
    glowColor: 'rgba(255,45,120,0.3)',
    badgeBg: '#ff2d78',
    brandColor: '#ff9ef5',
  },
  // Theme 2: Xbox GTA 6 Pre-order
  'xbox_gta6': {
    bgImage: images.xboxGta6 || images.viceCity,
    overlay: 'linear-gradient(180deg, rgba(5,20,5,0.8) 0%, rgba(10,35,10,0.6) 50%, rgba(15,50,15,0.9) 100%)',
    accent: '#107c10',
    accentShadow: 'rgba(16,124,16,0.6)',
    glowColor: 'rgba(16,124,16,0.3)',
    badgeBg: '#107c10',
    brandColor: '#5dfc5d',
  },
  // Theme 3: PS5 GTA 6 Pack/Bundle
  'pack_ps5': {
    bgImage: images.packPs5 || images.viceCity,
    overlay: 'linear-gradient(180deg, rgba(13,2,33,0.75) 0%, rgba(26,5,51,0.55) 50%, rgba(45,11,78,0.85) 100%)',
    accent: '#ff2d78',
    accentShadow: 'rgba(255,45,120,0.6)',
    glowColor: 'rgba(255,45,120,0.3)',
    badgeBg: '#7c3aed',
    brandColor: '#ff9ef5',
  },
  // Theme 4: PS5 SSD Requis
  'ssd_ps5': {
    bgImage: images.ssdPs5 || images.pcSetup,
    overlay: 'linear-gradient(180deg, rgba(10,20,40,0.8) 0%, rgba(15,30,60,0.6) 50%, rgba(20,40,80,0.9) 100%)',
    accent: '#ff5712',
    accentShadow: 'rgba(255,87,18,0.6)',
    glowColor: 'rgba(255,87,18,0.3)',
    badgeBg: '#ff5712',
    brandColor: '#00d4ff',
  },
  // Theme 5: PS5 Pro vs Slim
  'ps5_pro_slim': {
    bgImage: images.ps5ProSlim || images.ps5Gta6,
    overlay: 'linear-gradient(180deg, rgba(2,11,24,0.75) 0%, rgba(4,24,48,0.55) 50%, rgba(10,42,74,0.85) 100%)',
    accent: '#00d4ff',
    accentShadow: 'rgba(0,212,255,0.6)',
    glowColor: 'rgba(0,212,255,0.3)',
    badgeBg: '#00d4ff',
    brandColor: '#ffffff',
  },
  // Theme 6: Casque Audio
  'casque_audio': {
    bgImage: images.casqueAudio || images.pcSetup,
    overlay: 'linear-gradient(180deg, rgba(15,10,35,0.8) 0%, rgba(25,15,55,0.6) 50%, rgba(35,20,75,0.9) 100%)',
    accent: '#7c3aed',
    accentShadow: 'rgba(124,58,237,0.6)',
    glowColor: 'rgba(124,58,237,0.3)',
    badgeBg: '#7c3aed',
    brandColor: '#00d4ff',
  },
  // Theme 7: Configuration PC Gamer
  'pc_gamer': {
    bgImage: images.pcSetup,
    overlay: 'linear-gradient(180deg, rgba(5,15,30,0.8) 0%, rgba(10,25,50,0.6) 50%, rgba(15,35,70,0.9) 100%)',
    accent: '#00d4ff',
    accentShadow: 'rgba(0,212,255,0.6)',
    glowColor: 'rgba(0,212,255,0.3)',
    badgeBg: '#7c3aed',
    brandColor: '#00d4ff',
  },
  // Theme 8: Accessoires PS5
  'accessoires_ps5': {
    bgImage: images.ps5Gta6,
    overlay: 'linear-gradient(180deg, rgba(13,2,33,0.75) 0%, rgba(26,5,51,0.55) 50%, rgba(45,11,78,0.85) 100%)',
    accent: '#ff2d78',
    accentShadow: 'rgba(255,45,120,0.6)',
    glowColor: 'rgba(255,45,120,0.3)',
    badgeBg: '#ff2d78',
    brandColor: '#00d4ff',
  },
  // Theme 9: TV 4K Gaming
  'tv_4k': {
    bgImage: images.pcSetup,
    overlay: 'linear-gradient(180deg, rgba(15,15,15,0.8) 0%, rgba(25,25,25,0.6) 50%, rgba(35,35,35,0.9) 100%)',
    accent: '#ff5712',
    accentShadow: 'rgba(255,87,18,0.6)',
    glowColor: 'rgba(255,87,18,0.3)',
    badgeBg: '#ff5712',
    brandColor: '#ffffff',
  },
  // Theme 10: Routeur / Preparation GTA Online 2
  'routeur_gaming': {
    bgImage: images.pcSetup,
    overlay: 'linear-gradient(180deg, rgba(5,15,30,0.8) 0%, rgba(10,25,50,0.6) 50%, rgba(15,35,70,0.9) 100%)',
    accent: '#00d4ff',
    accentShadow: 'rgba(0,212,255,0.6)',
    glowColor: 'rgba(0,212,255,0.3)',
    badgeBg: '#7c3aed',
    brandColor: '#00d4ff',
  },
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get('title') || 'Guide Ultime GTA 6';
    const angle = searchParams.get('angle') || 'Dossier Spécial';
    const bgKey = searchParams.get('bg') || 'ps5_gta6';

    // Fallback to first theme if not found
    const theme = THEMES[bgKey] || THEMES['ps5_gta6'];

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#0d0221',
            position: 'relative',
          }}
        >
          {/* Background Image */}
          {theme.bgImage && (
            <img
              src={theme.bgImage}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}

          {/* Dark Overlay for Text Readability */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: theme.overlay,
              display: 'flex',
            }}
          />

          {/* Ambient glow top */}
          <div
            style={{
              position: 'absolute',
              top: -100,
              left: '50%',
              width: 800,
              height: 600,
              borderRadius: '50%',
              background: theme.glowColor,
              filter: 'blur(100px)',
              display: 'flex',
              transform: 'translateX(-50%)',
              zIndex: 2,
            }}
          />

          {/* Ambient glow bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: -100,
              right: -100,
              width: 600,
              height: 600,
              borderRadius: '50%',
              background: theme.glowColor,
              filter: 'blur(100px)',
              display: 'flex',
              zIndex: 2,
            }}
          />

          {/* Outer border frame */}
          <div
            style={{
              position: 'absolute',
              top: 32,
              left: 32,
              right: 32,
              bottom: 32,
              border: `4px solid ${theme.accent}`,
              opacity: 0.8,
              display: 'flex',
              zIndex: 3,
            }}
          />

          {/* TOP: Logo + angle badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '90px 80px 0',
              gap: 32,
              zIndex: 10,
            }}
          >
            {/* Site logo bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(0,0,0,0.6)',
                padding: '10px 24px',
                borderRadius: 8,
                border: `1px solid rgba(255,255,255,0.1)`,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 30,
                  background: theme.accent,
                  display: 'flex',
                  boxShadow: `0 0 15px ${theme.accentShadow}`,
                }}
              />
              <span
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: 6,
                  textTransform: 'uppercase',
                }}
              >
                GTA6
              </span>
              <span
                style={{
                  color: theme.brandColor,
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: 6,
                  textTransform: 'uppercase',
                }}
              >
                INFO
              </span>
            </div>

            {/* Angle badge */}
            <div
              style={{
                background: theme.badgeBg,
                color: 'white',
                padding: '16px 40px',
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: 6,
                textTransform: 'uppercase',
                borderRadius: 8,
                boxShadow: `0 10px 40px ${theme.accentShadow}`,
              }}
            >
              {angle}
            </div>
          </div>

          {/* CENTER decorative line */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 80px',
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: 3,
                flex: 1,
                background: `linear-gradient(to right, transparent, ${theme.accent}, transparent)`,
                opacity: 0.6,
                display: 'flex',
              }}
            />
          </div>

          {/* BOTTOM: Title + brand pill */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0 80px 90px',
              zIndex: 10,
              alignItems: 'center',
              textAlign: 'center',
              gap: 40,
            }}
          >
            {/* Title */}
            <div
              style={{
                fontSize: title.length > 45 ? 64 : 80,
                color: 'white',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                fontWeight: 900,
                textShadow: `0 4px 60px rgba(0,0,0,1), 0 0 80px ${theme.glowColor}`,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {title}
            </div>

            {/* Brand pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(0,0,0,0.8)',
                border: `2px solid ${theme.brandColor}`,
                padding: '16px 48px',
                borderRadius: 100,
                boxShadow: `0 0 40px rgba(0,0,0,0.6)`,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: theme.brandColor,
                  display: 'flex',
                  boxShadow: `0 0 15px ${theme.brandColor}`,
                }}
              />
              <span
                style={{
                  color: theme.brandColor,
                  fontSize: 26,
                  letterSpacing: 4,
                  fontWeight: 800,
                }}
              >
                gta6-pi-cyan.vercel.app
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1000,
        height: 1500,
      }
    );
  } catch (e: unknown) {
    console.error('Pinterest image generation error:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
