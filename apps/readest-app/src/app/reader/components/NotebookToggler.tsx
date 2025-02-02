import React from 'react';
import { LuNotebookPen } from 'react-icons/lu';

import { useSidebarStore } from '@/store/sidebarStore';
import { useNotebookStore } from '@/store/notebookStore';
import { useTranslation } from '@/hooks/useTranslation';
import Button from '@/components/Button';

interface NotebookTogglerProps {
  bookKey: string;
}

const NotebookToggler: React.FC<NotebookTogglerProps> = ({ bookKey }) => {
  const _ = useTranslation();
  const { sideBarBookKey, setSideBarBookKey } = useSidebarStore();
  const { isNotebookVisible, toggleNotebook } = useNotebookStore();
  const handleToggleSidebar = () => {
    if (sideBarBookKey === bookKey) {
      toggleNotebook();
    } else {
      setSideBarBookKey(bookKey);
      if (!isNotebookVisible) toggleNotebook();
    }
  };
  return (
    <Button
      icon={
        sideBarBookKey == bookKey && isNotebookVisible ? (
          <LuNotebookPen size={16} className='text-base-content' />
        ) : (
          <LuNotebookPen size={16} className='text-base-content' />
        )
      }
      onClick={handleToggleSidebar}
      tooltip={_('Notebook')}
      tooltipDirection='bottom'
    ></Button>
  );
};

export default NotebookToggler;
