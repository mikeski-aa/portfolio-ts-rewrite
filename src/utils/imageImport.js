import dLogin from "../assets/desktoppics/loginDesk.png";
import dReg from "../assets/desktoppics/register-front.png";
import dMain from "../assets/desktoppics/main-front.png";
import dFriend from "../assets/desktoppics/friends-front.png";
import dSearch from "../assets/desktoppics/friendsearch-front.png";
import dUser from "../assets/desktoppics/userprof-front.png";
import dUserComment from "../assets/desktoppics/usercomments-front.png";
import dEditUser from "../assets/desktoppics/edituser-front.png";
import dOprofile from "../assets/desktoppics/anotherprofile-front.png";

import mLogin from "../assets/mobilepics/loginMobile.png";
import mRegister from "../assets/mobilepics/registerMobile.png";
import mMain from "../assets/mobilepics/mainMobile.png";
import mFriend from "../assets/mobilepics/friendsMobile.png";
import mSearch from "../assets/mobilepics/friendSearchMobile.png";
import mUser from "../assets/mobilepics/usrProfPostMobile.png";
import mUserComment from "../assets/mobilepics/userMobile.png";
import mEditUser from "../assets/mobilepics/editUserMobile.png";
import mOprofile from "../assets/mobilepics/friendMobile.png";

import logweb from "../assets/newassets/logweb.png";
import regweb from "../assets/newassets/regweb.png";
import mainweb from "../assets/newassets/mainweb.png";
import friendweb from "../assets/newassets/friendweb.png";
import searchweb from "../assets/newassets/searchweb.png";
import editweb from "../assets/newassets/editweb.png";
import commentweb from "../assets/newassets/commentweb.png";

function desktopArray() {
  const desktopItems = [
    dLogin,
    dReg,
    dMain,
    dFriend,
    dSearch,
    dUser,
    dUserComment,
    dEditUser,
    dOprofile,
  ];

  return desktopItems;
}

function mobileArray() {
  const mobileItems = [
    mLogin,
    mRegister,
    mMain,
    mFriend,
    mSearch,
    mUser,
    mUserComment,
    mEditUser,
    mOprofile,
  ];

  return mobileItems;
}

function newAssetArray() {
  const newArray = [
    logweb,
    regweb,
    mainweb,
    friendweb,
    searchweb,
    editweb,
    commentweb,
  ];

  return newArray;
}

export { desktopArray, mobileArray, newAssetArray };
