use inc::Module::Install;

RTx     'RT-Extension-NKSC';
license 'gplv2';
repository 'https://github.com/NRDCS/rt-extension-nksc';

requires_rt '4.4.0';

sign;
WriteAll;
