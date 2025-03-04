import React, { useMemo } from 'react';
import {
  downloadLinux86,
  downloadLinux86AppImage,
  downloadLinux86Deb,
  downloadLinux86Rpm,
} from '@/lib/hooks/use-download';
import DropdownBtn from '@/components/shared/dropdown-btn';

function LinuxBtnGroup({ title }: { title: string }) {
  const linuxOptions = useMemo(() => {
    return [
      {
        label: `.AppImage`,
        value: 'AppImage',
      },
      {
        label: `.deb`,
        value: 'deb',
      },
      {
        label: `.rpm`,
        value: 'rpm',
      },
      {
        label: `.tar.gz`,
        value: 'tar.gz',
      },
      {
        label: 'Flatpak',
        value: 'Flatpak',
      },
      {
        label: 'Snap',
        value: 'Snap',
      },
    ];
  }, []);

  return (
    <div className={'linux-btn-group'}>
      <DropdownBtn
        title={title}
        extension={'AppImage'}
        extensionOptions={linuxOptions}
        onClick={(extension: string) => {
          if (extension === 'AppImage') downloadLinux86AppImage();
          if (extension === 'deb') downloadLinux86Deb();
          if (extension === 'rpm') downloadLinux86Rpm();
          if (extension === 'tar.gz') downloadLinux86();
          if (extension === 'Flatpak') window.open('https://flathub.org/apps/io.appflowy.MoneySystem', '_blank');
          if (extension === 'Snap') window.open('https://snapcraft.io/appflowy', '_blank');
        }}
      />
    </div>
  );
}

export default LinuxBtnGroup;
