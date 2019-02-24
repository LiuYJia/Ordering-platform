import $ from 'jquery'
import netAjax from './net-ajax'
// import {develop, isLogin, baseUrl} from '../../config/config'

export default {

        /**
         * 获取商铺信息
         */
        queryUserInfo: function () {
            if(develop) {
                console.log(444);
                var def = $.Deferred();
                setTimeout(function () {
                    var d = {"resultCode":200,"resultJson":{"id":1,"shopName":'够味',"postTypeAndtime":'美团专送/30分钟',"discount":"满20减5"},"resultMessage":"success"}
                    def.resolve(d);
                }, 100);
                return def;
            }else {
                var def = $.Deferred();
                netAjax.singleRequest({
                    url: baseUrl + '/user/selectPersonalInfo',
                    type: 'GET',
                    success: function (d) {
                        def.resolve(d)
                    }
                })
                return def;
            }
        }
    }