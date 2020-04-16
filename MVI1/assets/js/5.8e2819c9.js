(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{322:function(t,e,a){t.exports=a.p+"assets/img/cloud-credentials.8f2243e5.png"},323:function(t,e,a){t.exports=a.p+"assets/img/node-templates.86bee9c0.png"},335:function(t,e,a){"use strict";a.r(e);var l=a(33),s=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"rancher-user-cluster-configuration"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#rancher-user-cluster-configuration"}},[t._v("#")]),t._v(" Rancher user cluster configuration")]),t._v(" "),l("p",[t._v("Once the admin cluster has been deployed and Rancher server has been installed, the playbooks deploy a\nuser cluster based on the following configuration.")]),t._v(" "),l("h2",{attrs:{id:"general-config-for-user-cluster"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#general-config-for-user-cluster"}},[t._v("#")]),t._v(" General config for user cluster")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("user_folder")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Folder and pool name for the user cluster VMs")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("user_cluster.name")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the user cluster")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("user_cluster.vcenter_credsname")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name given to the generated Cloud Credentials")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("user_cluster.csi")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean. Set to "),l("code",[t._v("true")]),t._v(" to configure the CSI driver on the user cluster")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("user_cluster.vm_template")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The VM template to use when creating the nodes in the suer cluster."),l("br"),t._v("Defaults to the admin template if none specified.")])])])]),t._v(" "),l("p",[t._v("For more information on configuring the CSI driver for a user cluster, see the section "),l("a",{attrs:{href:"csi-storage-config"}},[t._v("Container Storage Interface (CSI) configuration")]),t._v(".")]),t._v(" "),l("p",[l("br"),l("br")]),t._v(" "),l("p",[t._v("The following figure shows the generated cloud credentials in the UI, accessed via your profile:")]),t._v(" "),l("p",[l("img",{attrs:{src:a(322),alt:'"Cloud credentials"',title:"Figure. Cloud credentials"}})]),t._v(" "),l("p",[l("strong",[t._v("Figure. Cloud credentials")])]),t._v(" "),l("h2",{attrs:{id:"configuration-of-pools"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-pools"}},[t._v("#")]),t._v(" Configuration of pools")]),t._v(" "),l("p",[l("code",[t._v("user_cluster.pools")]),t._v(" is an array of pool configurations, with typically one pool specified for master nodes,\nand one pool for worker nodes. Note that the cluster must have at least one master node, one etcd node and one worker node.")]),t._v(" "),l("p",[t._v("The configuration variables used within each pool definition are detailed below.")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("name")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the pool, for example "),l("code",[t._v("master-pool")]),t._v(" or "),l("code",[t._v("worker-pool")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("etcd")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean."),l("code",[t._v("true")]),t._v(" if you want "),l("code",[t._v("etcd")]),t._v(" to run on nodes in this pool")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("master")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean."),l("code",[t._v("true")]),t._v(" if you want the nodes in this pool to be "),l("code",[t._v("master")]),t._v(" nodes")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("worker")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean."),l("code",[t._v("true")]),t._v(" if you want the nodes in this pool to be "),l("code",[t._v("worker")]),t._v(" nodes"),l("br"),t._v("Note that a node can act as both a master and a worker node")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("count")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number of nodes of this type to create.")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("hostPrefix")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The prefix used to identify these nodes as belonging to this pool"),l("br"),t._v("Typically, you will specify a different prefix for master and worker nodes")])])])]),t._v(" "),l("h2",{attrs:{id:"node-templates"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#node-templates"}},[t._v("#")]),t._v(" Node templates")]),t._v(" "),l("p",[t._v("For each pool, a node template can be specified with resource configuration appropriate to the node type\nof the pool.")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("node_template.name")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the generated node template")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("node_template.cpu_count")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The number of virtual CPUs for the node")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("node_template.disk_size")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The size of disk in MB to create for the node")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("node_template.disk_size")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("The size of RAM in MB")])])])]),t._v(" "),l("p",[l("br"),l("br")]),t._v(" "),l("p",[t._v("The following figure shows the generated node templates in the UI, accessed via your profile:")]),t._v(" "),l("p",[l("img",{attrs:{src:a(323),alt:'"Node templates"',title:"Figure. Node templates"}})]),t._v(" "),l("p",[l("strong",[t._v("Figure. Node templates")])]),t._v(" "),l("h2",{attrs:{id:"sample-user-cluster-definition"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sample-user-cluster-definition"}},[t._v("#")]),t._v(" Sample user cluster definition")]),t._v(" "),l("p",[t._v("The sample definition has one master pool, with a single node containing the master and etcd components. There is also\na single worker pool, with 2 nodes that only run worker components. In this example, the VM template is not specified\nso the default is to use the same template as that used for the Rancher admin cluster")]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("user_cluster:\n# vm_template: hpe-ubuntu-tpl     # an existing VM template, the admin template by default\n  name: api                       # name of the user cluster\n  csi: false                      # true to be done\n  vcenter_credsname: mycreds2     # only one vCenter cluster supported at this time\n  pools:\n   - name: master-pool\n     etcd: true\n     master: true\n     worker: false\n     count: 1\n     hostPrefix: hpe-mas\n     node_template:\n       name: master-node\n       cpu_count: 2\n       disk_size: 20000\n       memory_size: 8192\n   - name: worker-pool\n     etcd: false\n     master: false\n     worker: true\n     count: 2\n     hostPrefix: hpe-wrk\n     node_template:\n       name: worker-node\n       cpu_count: 2\n       disk_size: 40000\n       memory_size: 4096\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);